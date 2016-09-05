/*
 * Formats a number nicely
 */
function F($) {
    y = $;

    // Get the number of digit groups
    for (x = 0; y > 999999 && x < 5; x++) { 
        y /= 1000;
    }

    return P(y).toLocaleString() + (x > 0 ? ' kmbt'[x] : '');
}
