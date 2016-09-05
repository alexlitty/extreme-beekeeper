var fs = require('fs');
var path = require('path');
var requireFromString = require('require-from-string');
var config = require('./config');

/**
 * Engine-level format dependencies.
 */
var dependencies = fs.readFileSync(path.join(config.path.engine, 'utility.js'));

/**
 * Engine-level format function.
 */
var engineFormat = fs.readFileSync(path.join(config.path.engine, 'format.js'));
engineFormat = requireFromString(dependencies + engineFormat + 'module.exports = F');

/**
 * Server wrapper for the engine-level format function.
 */
module.exports = engineFormat;
