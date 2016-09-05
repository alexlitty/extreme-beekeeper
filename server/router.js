var ejs = require('ejs');
var moment = require('moment');
var path = require('path');

var config = require('./config');
var Session = require('./Session');
var format = require('./format');

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
            var milliseconds = moment().diff(previousTime);

            if (milliseconds > 0) {
                var ticks = (milliseconds * config.ticksPerSecond / 1000);
                session.instance.tick(parseInt(ticks));
            }

            // Save session state, send page.
            session.save(function(err) {
                if (err) {
                    console.error(err);
                    res.status(500).send();
                    return;
                }

                var renderFilename = path.join(contentPath, 'index.html'),
                    honey = session.instance.getHoney();

                var renderData = {
                    honey: honey,
                    honeyFriendly: format(honey),
                    honeyRate: format(session.instance.getHoneyPerSecond())
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
