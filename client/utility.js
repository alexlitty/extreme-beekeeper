/**
 * Aliases to common functions and properties.
 */
var d = document,
    w = window,

    D = d.getElementById.bind(d),
    e = function() { return d.createElement('div') },

    a = function($, _) { $.appendChild(_) },

    L = w.addEventListener.bind(w),
    V = function($) { return $.dataset.v || $.innerHTML },
    W = function($, _) { $.innerHTML = _ },
    Z = setInterval,
    z = setTimeout,

    // Game instance.
    i;
