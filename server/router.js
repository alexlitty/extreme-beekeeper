exports.init = function(app, path) {
    app.get('/b.js', function(req, res) {
        res.sendFile(path + '/b.js');
    });

    app.get('/b.css', function(req, res) {
        res.sendFile(path + '/b.css');
    });

    app.get('/', function(req, res) {
        var sessionId = req.cookies.sessionId;

        if (!sessionId) {
            sessionId = 9001;
            res.cookie('testCookie', sessionId);
        }

        res.sendFile(path + '/index.html');
    });
}
