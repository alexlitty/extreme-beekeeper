var _ = require('underscore');
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
        $: state.honey||1,
        A: state.hives||0
    });
}

/**
 * Get the current amount of honey.
 */
Instance.prototype.getHoney = function() {
    return this.innerInstance.$;
}

/**
 * Get the current amount of a particular item.
 */
Instance.prototype.getItemCount = function(item) {
    return this.innerInstance[item];
}

/**
 * Get the current rate of honey income.
 */
Instance.prototype.getHoneyPerSecond = function() {
    return this.innerInstance._ * config.ticksPerSecond;
}

/**
 * Add items to the instance.
 */
Instance.prototype.addItem = function(item, amount) {
    if (/[A-Z]/.test(item) && _.isNumber(this.innerInstance[item])) {
        this.innerInstance[item] += amount;
    }

    // Update honey rate.
    this.innerInstance.r();
}

/**
 * Perform one or more game ticks.
 */
Instance.prototype.tick = function(n) {
    this.innerInstance.t(n);
}

module.exports = Instance;
