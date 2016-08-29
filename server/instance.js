var fs = require('fs');
var path = require('path');
var requireFromString = require('require-from-string');
var config = require('./config');

// Wrapper for the engine-level instance.
var Instance = fs.readFileSync(path.join(config.path.engine, 'instance.js'));
Instance = requireFromString(Instance + 'module.exports = I');

module.exports = Instance;
