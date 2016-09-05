var async = require('async');
var ejs = require('ejs');
var path = require('path');

var Session = require('./Session');
var game = require('./game');

exports.init = function(app, contentPath) {

    /**
     * Static JavaScript file.
     */
    app.get('/b.js', function(req, res) {
        res.sendFile(path.join(contentPath, 'b.js'));
    });

    /**
     * Static CSS file.
     */
    app.get('/b.css', function(req, res) {
        res.sendFile(path.join(contentPath, 'b.css'));
    });

    /**
     * Perform an action with no response.
     */
    app.post('/:action-:item', function(req, res) {
        game.update(req.session, req.params, function(err) {
            if (err) {
                res.fail(res, err);
            }

            else {
                res.succeed();
            }
        });
    });

    /**
     * Request the game while optionally performing an action.
     */
    app.get('/(:action-:item)?', function(req, res) {
        async.waterfall(
            [
                // Update the game state.
                function(next) {
                    game.update(req.session, req.params, next);
                },

                // Render a page response.
                function(gameData, next) {
                    var renderFilename = path.join(contentPath, 'index.html');
                    ejs.renderFile(renderFilename, gameData, null, next);
                }
            ],

            // Send final response.
            function(err, content) {
                if (err) {
                    res.fail(res, err);
                }

                else {
                    res.succeed(content);
                }
            }
        )
    });
}
