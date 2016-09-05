/**
 * Instance of the game.
 */
function I(c) {

    // Current amount of honey.
    this.$ = c.$;

    // Number of hives.
    this.a = c.a||0;

    // Update honey rate.
    this.r();
}

/**
 * Updates the rate of honey gained per frame.
 */
I.prototype.r = function() {
    this._ = this.a * 1;
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
