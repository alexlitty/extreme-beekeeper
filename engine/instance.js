/**
 * Instance of the game.
 */
function I(c) {

    // Previously reported time.
    this._t = c._t;

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
 * Catch-up.
 *
 * Returns the number of ticks performed.
 */
I.prototype.c = function() {

    // Time passed.
    X = new T();
    x = X - this._t;
    this._t = X;

    // Ticks needed to catch up.
    y = C.f * P(x / 1000);

    // Catch up.
    if (y > 0) {
        this.t(y);
    }
    return y;

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
