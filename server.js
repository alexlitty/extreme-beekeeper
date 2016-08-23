var path = require('path');

var express = require('express');
var cookieParser = require('cookie-parser');
var compression = require('compression');

var router = require('./server/router.js');

// Server configuration.
var config = {
    paths: {
        content: __dirname + "/client-min"
    }
};

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

// Start server.
router.init(app, config.paths.content);
app.listen(8000, function() {
    console.log("Beekeeper Server Started");
});
