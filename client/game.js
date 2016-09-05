/**
 * Initialize our local game instance.
 */
L('load', function() {

    // Initialize instance.
    i = new I({
        $: P(V(h)),
        A: P(V(D("AA")))
    });

    // Kick off game.
    Z(function() {
        i.t();

        // Update honey count.
        W(
            D("h"),
            F(i.$)
        );

        // Update honey rate.
        W(
            D("r"),
            F(i._ * C.f)
        );

    }, 1000/C.f);

});
