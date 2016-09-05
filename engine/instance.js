/**
 * Instance of the game.
 */
function I(c) {

    // Current amount of honey.
    this.$ = c.$;

    // Number of hives.
    this.A = c.A||0;

    // Update honey rate.
    this.r();
}

/**
 * Updates the rate of honey gained per frame.
 */
I.prototype.r = function() {
    this._ = this.A * 1;
}

/**
 * Purchases a new item.
 */
I.prototype.b = function($, _) {
    this[$] += _;
    this.r();
}

/**
 * Perform one or more game ticks.
 *
 * n is the amount of ticks to perform, default 1.
 */
I.prototype.t = function(n) {
    n = n || 1;

    // Add honey.
    this.$ += this._ * n;
}
