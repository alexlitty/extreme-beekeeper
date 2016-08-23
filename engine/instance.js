/**
 * Instance of the game.
 */
function I() {

    // Honey gained per tick.
    this.H = 1;

    // Honey.
    this.h = 0;
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
