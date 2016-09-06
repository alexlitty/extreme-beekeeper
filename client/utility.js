/**
 * Aliases to common functions and properties.
 */
var U = undefined,
    d = document,
    l = d.addEventListener.bind(d),

    w = window,
    L = w.addEventListener.bind(w),

    D = d.getElementById.bind(d),
    e = function() { return d.createElement('div') },

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

    // Reference to local storage, if available.
    B,

    // Game instance.
    i;
