document.onclick = function($) {
    $ = $ || window.event;
    x = $.target || $.srcElement;

    // Link has been clicked.
    if (x.tagName == 'A') {
        X = x.href;

        // Get the end of the target URL.
        y = X.lastIndexOf('/');
        if (y > -1) {
            y = X.slice(y + 1).split('-');

            // Perform action.
            if (y.length > 1) {
                Q(y[0], y[1]);
            }
        }

        return false;
    }
}
