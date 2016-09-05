/**
 * Initialize our local game instance.
 */
L('load', function() {

    // Initialize local storage, if available.
    try {
        B = w.localStorage;
        B._ = '_';
        if (B._ != '_') {
            throw 0;
        }
    }
    
    // Not available.
    catch(x) {
        B = U;
    }

    // Initialize instance.
    i = new I({
        _t: new T(B ? B._t : U),
        $: P(V('h')),
        A: P(V('AA'))
    });

    // Catch up on background progress.
    i.c();
    q();

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
