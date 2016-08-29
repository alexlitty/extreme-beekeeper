var moment = require('moment');
var path = require('path');

var Session = require('./Session.js');

exports.init = function(app, contentPath) {
    app.get('/b.js', function(req, res) {
        res.sendFile(path.join(contentPath, 'b.js'));
    });

    app.get('/b.css', function(req, res) {
        res.sendFile(path.join(contentPath, 'b.css'));
    });

    app.get('/', function(req, res) {
        var session = new Session(req, res);
        session.init(function(err) {

            // Cannot initialize session.
            if (err) {
                console.error(err);
                res.status(500).send();
                return;
            }

            // Catch-up on session.
            var previousTime = session.get('previousTime');

            // Save session state, send page.
            session.save(function(err) {
                if (err) {
                    console.error(err);
                    res.status(500).send();
                    return;
                }

                res.sendFile(path.join(contentPath, 'index.html'));
            });
        });
    });
}
