var fs = require('fs');
var path = require('path');
var requireFromString = require('require-from-string');
var pathRoot = path.resolve(__dirname, '..');

// Include the engine-level configuration.
var engineConfig = fs.readFileSync(path.join(pathRoot, 'engine', 'config.js'));
engineConfig = requireFromString(engineConfig + 'module.exports = C');

var config = {

    /**
     * When to expire cookies.
     *
     * Set to the maximum possible time for older browsers.
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
        db: path.join(pathRoot, 'db'),
        engine: path.join(pathRoot, 'engine')
    },

    /**
     * Game ticks to be executed per second.
     */
    ticksPerSecond: engineConfig.f

};

module.exports = config;
