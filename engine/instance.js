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
 * Perform a game tick.
 */
I.prototype.t = function() {

    // Add honey.
    this.h += this.H;
}
