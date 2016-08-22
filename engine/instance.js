/**
 * Instance of the game.
 */
function I() {

    // Honey.
    this.h = 0;
}

/**
 * Perform a game tick.
 */
I.prototype.t = function() {

    // Add honey.
    this.h++;
}
