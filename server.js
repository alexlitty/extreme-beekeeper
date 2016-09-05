var async = require('async');
var fs = require('fs');

var express = require('express');
var cookieParser = require('cookie-parser');
var compression = require('compression');

var config = require('./server/config');
var router = require('./server/router');
var Session = require('./server/Session');

// Initialize express.
var app = express();

// Enable gzip compression.
app.use(compression({
    threshold: 0,
    filter: function(req, res) {
        return true;
    }
}));

// Enable cookie handling.
app.use(cookieParser());

// Enable sessions.
app.use(function(req, res, next) {
    
    // Ignore static files.
    if (req.originalUrl.indexOf('.') > -1) {
        next();
    }

    // Get session and continue.
    var session = new Session(req, res);
    session.init(function(err) {
        if (err) {
            console.error(err);
            res.status(500).send();
            return;
        }

        req.session = session;
        next();
    });

});

// Add special response functions.
app.use(function(req, res, next) {

    // Send a failure response.
    res.fail = function(res, err) {
        console.error(err);
        res.status(500).send();
    };

    // Auto-save the session and send a successful response.
    res.succeed = function(content) {
        if (!req.session) {
            res.send(content);
        }

        else {
            req.session.save(function(err) {
                if (err) {
                    res.fail(res, err);
                }
                
                else {
                    res.send(content);
                }
            });
        }
    }

    next();

});

// Start the server.
router.init(app, config.path.content);
app.listen(config.port, function() {
    console.log('Beekeeper Server listening on port ' + config.port);
});
