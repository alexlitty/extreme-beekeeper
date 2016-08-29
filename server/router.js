var ejs = require('ejs');
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
            var seconds = moment().diff(previousTime, 'seconds');

            var honey = session.get('honey');
            if (seconds > 0) {
                if (!honey) {
                    honey = 1;
                } else {
                    honey += 1000;
                }

                session.set('honey', honey);
            }

            // Save session state, send page.
            session.save(function(err) {
                if (err) {
                    console.error(err);
                    res.status(500).send();
                    return;
                }

                var renderFilename = path.join(contentPath, 'index.html');
                var renderData = {
                    honey: honey
                };

                ejs.renderFile(renderFilename, renderData, null, function(err, content) {
                    if (err) {
                        console.error(err);
                        res.status(500).send();
                        return;
                    }

                    res.send(content);
                });
            });
        });
    });
}
