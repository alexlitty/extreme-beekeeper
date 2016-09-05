/*
 * Formats a number nicely.
 */
function F($) {
    y = $;
    for (x = 0; y > 1000 && x < 5; x++) { 
        y /= 1000;
    }

    return P(y) + (y > 1000 ? '' : 'kmbt'[x]);
}
