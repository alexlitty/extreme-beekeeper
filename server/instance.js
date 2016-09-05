var fs = require('fs');
var path = require('path');
var requireFromString = require('require-from-string');
var config = require('./config');

/**
 * Engine-level instance.
 */
var engineInstance = fs.readFileSync(path.join(config.path.engine, 'instance.js'));
engineInstance = requireFromString(engineInstance + 'module.exports = I');

/**
 * Server wrapper for the engine-level instance.
 */
function Instance(state) {
    this.innerInstance = new engineInstance({
        $: state.honey,
        a: state.hives
    });
}

/**
 * Get the current amount of honey.
 */
Instance.prototype.getHoney = function() {
    return this.innerInstance.$;
}

/**
 * Get the current amount of hives.
 */
Instance.prototype.getHives = function() {
    return this.innerInstance.a;
}

/**
 * Get the current rate of honey income.
 */
Instance.prototype.getHoneyPerSecond = function() {
    return this.innerInstance._ * config.ticksPerSecond;
}

/**
 * Perform one or more game ticks.
 */
Instance.prototype.tick = function(n) {
    this.innerInstance.t(n);
}

module.exports = Instance;
