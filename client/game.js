/**
 * Initialize our local game instance.
 */
L('load', function() {

    // Get user interface elements.
    var h = D("h");

    // Initialize instance.
    i = new I({
        $: P(V(h)),
        A: P(V(D("AA")))
    });

    // Kick off game.
    Z(function() {
        i.t();

        // Update the honey count.
        W(
            h,
            F(i.$)
        );
    }, 1000/C.f);

});
