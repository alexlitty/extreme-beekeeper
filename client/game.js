/**
 * Initialize our local game instance.
 */
L('load', function() {

    // Get user interface elements.
    var h = D("h"),

    // Get initial values.
        c = {
            H: 1,
            h: P(V(h))
        },

    // Initialize instance.
        i = new I(c);

    // Kick off game.
    Z(function() {
        i.t();

        // Update the honey count.
        W(
            h,
            F(i.h)
        );
    }, 1000/C.f);

});
