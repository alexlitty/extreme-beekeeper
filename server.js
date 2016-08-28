var async = require('async');
var fs = require('fs');

var express = require('express');
var cookieParser = require('cookie-parser');
var compression = require('compression');

var config = require('./config');
var router = require('./server/router');

async.waterfall(
    [
        // Make database directory.
        function(cb) {
            fs.mkdir(config.path.db, 0777, function(err) {
                if (err && err.code !== 'EEXIST') {
                    cb(err);
                } else {
                    cb();
                }
            });
        },

        // Make sessions directory.
        function(cb) {
            fs.mkdir(config.path.db + 'session', 0777, function(err) {
                if (err && err.code !== 'EEXIST') {
                    cb(err);
                } else {
                    cb();
                }
            });
        }
    ],

    function(err) {
        if (err) {
            console.error(err);
            return;
        }

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
        app.listen(8000, function() {
            console.log('Beekeeper Server Started');
        });
    }
);
