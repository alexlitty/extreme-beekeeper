/**
 * Aliases to common functions and properties.
 */
var U = undefined,
    d = document,

    // Document body.
    b,

    w = window,
    L = w.addEventListener.bind(w),

    D = d.getElementById.bind(d),
    E = function($) { return d.createElement($) },
    e = function() { return E('div') },

    a = function($, _) { $.appendChild(_) },

    /**
     * Retrieve a game value.
     */
    V = function($) {

        // From local storage.
        if (B) {
            if ($.length > 1) {
                x = B[$[0] == '_' ? $ : $[1]] || 0;
                return x;
            }
            return B.$ || 1;
        }

        // From server.
        $ = D($);
        return $.dataset.v || $.innerHTML

    },

    W = function($, _) { $.innerHTML = _ },
    Z = setInterval,
    z = setTimeout,

    // Random integer generator, between $ and _.
    G = function($, _) { return Math.floor(Math.random() * (_ - $ + 1)) + $ },
    
    // Differ from an integer randomly.
    g = function($, _) { return G($-_,$+_) },

    // Local storage, if available.
    B,

    // Main canvas element.
    S,

    // Main rendering context, if available.
    s,

    // Canvas, width and height.
    h,
    H,

    // Canvas helper functions.
    p,
    m,
    l,
    f,
    c = function($) { s.fillStyle = $ },

    // Draws a path.
    o = function($) {
        p();
        m($[0], $[1]);
        for (x = 2; x < $.length; x += 2) {
            l($[x], $[x+1]);
        }
    },

    // Rendered objects.
    r = [],

    // Adds an object to be rendered.
    R = function($) { r.push($) },

    // Game instance.
    i;
