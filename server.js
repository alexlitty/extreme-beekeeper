var async = require('async');
var fs = require('fs');

var express = require('express');
var cookieParser = require('cookie-parser');
var compression = require('compression');

var config = require('./server/config');
var router = require('./server/router');

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

// Start the server.
router.init(app, config.path.content);
app.listen(config.port, function() {
    console.log('Beekeeper Server listening on port ' + config.port);
});
