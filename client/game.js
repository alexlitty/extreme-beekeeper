/**
 * Initialize our local game instance.
 */
L('load', function() {
    b = d.body;

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

    // Initialize drawing.
    S = E('canvas');
    if (S.getContext) {

        // Get drawing context.
        s = S.getContext('2d');
        a(b, S);

        // Fill the window with the canvas.
        var x = function() {
            S.width = w.innerWidth;
            S.height = w.innerHeight;
        }
        x();
        L('resize', x, false);
    }

    // Let there be bees!
    Z(function() {

        // If interval has fallen behind, catch up and save. Otherwise just tick.
        i.c() ? q() : i.t();

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
