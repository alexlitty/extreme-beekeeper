var Session = require('./Session.js');

exports.init = function(app, path) {
    app.get('/b.js', function(req, res) {
        res.sendFile(path + 'b.js');
    });

    app.get('/b.css', function(req, res) {
        res.sendFile(path + 'b.css');
    });

    app.get('/', function(req, res) {
        var session = new Session(req, res);
        session.init(function(err) {
            if (err) {
                console.error(err);
                res.status(500).send();
            }

            else {
                session.save();
                res.sendFile(path + 'index.html');
            }
        });
    });
}
