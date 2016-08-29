/**
 * Initialize our local game instance.
 */
L('load', function() {

    // Get user interface elements.
    var h = D("h"),

    // Get initial values.
        c = {
            H: 1,
            h: F(V(h))
        },

    // Initialize instance.
        i = new I(c);

    // Kick off game.
    Z(function() {
        i.t();
        W(h,i.h);
    }, 1000/C.f);

});
