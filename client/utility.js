/**
 * Aliases to common functions and properties.
 */
var D = document.getElementById.bind(document),
    L = window.addEventListener.bind(window),
    V = function($) { return $.dataset.v || $.innerHTML; },
    W = function($, _) { $.innerHTML = _ },
    Z = setInterval,
    z = setTimeout;
