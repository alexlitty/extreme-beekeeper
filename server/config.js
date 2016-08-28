var _eval = require('eval');
var fs = require('fs');
var path = require('path');

// Include the engine-level configuration.
var pathRoot = path.resolve(__dirname, '..');
var engineConfig = fs.readFileSync(path.join(pathRoot, 'engine', 'config.js'));
engineConfig = _eval(engineConfig);

module.exports = {
    /**
     * When to expire cookies.
     *
     * This date in 2038 is the farthest allowable time for older browsers.
     */
    cookieExpiration: new Date(2147483647 * 1000),

    /**
     * Port for the server to listen on.
     */
    port: 8000,

    /**
     * Directory paths used by the server.
     */
    path: {
        root: pathRoot,
        content: path.join(pathRoot, 'client-min'),
        db: path.join(pathRoot, 'db')
    },

    /**
     * Game ticks to be executed per second.
     */
    ticksPerSecond: engineConfig.f
};
