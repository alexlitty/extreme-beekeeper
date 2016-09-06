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

        // Get drawing context, assign helper functions.
        s = S.getContext('2d');
        p = s.beginPath.bind(s);
        m = s.moveTo.bind(s);
        l = s.lineTo.bind(s);
        f = s.fill.bind(s);
        a(b, S);

        // Fill the window with the canvas.
        var X = function() {
            S.width = h = w.innerWidth;
            S.height = H = w.innerHeight;
        }
        X();
        L('resize', X, false);

        // Grass.
        var Y = new function() {
            this.$ = [];

            y = H*0.65;
            for (x = 0; x <= 25; x++) {
                this.$.push(h * (x/25));
                this.$.push(y = g(y, 2));
            }

            this.$.push(h, H);
            this.$.push(0, H);
        }
        Y._ = function() {
            c("#9F9");
            o(this.$);
            f();
        }
        R(Y);

        // Start drawing.
        Z(function() {
            s.clearRect(0, 0, h, H);
            for (y = 0; y < r.length; y++) {
                r[y]._();
            }
        }, 1000/30);
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
