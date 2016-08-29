/**
 * Instance of the game.
 */
function I(c) {

    // Honey gained per tick.
    this.H = c.H;

    // Honey.
    this.h = c.h;
}

/**
 * Perform one or more game ticks.
 *
 * n is the amount of ticks to perform, default 1.
 */
I.prototype.t = function(n) {
    n = n || 1;

    // Add honey.
    this.h += this.H * n;
}
