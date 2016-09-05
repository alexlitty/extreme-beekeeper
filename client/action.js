/**
 * Saves progress locally, if applicable.
 */
function q() {
    if (B) {
        B._t = new T();
        B.$ = i.$ || 1;
    }
}

/**
 * Performs an action.
 */
function Q($, _) {

    // Update the game instance.
    if ($ == 'buy') {
        i.b(_, 1);
    }

    // Save progress locally.
    if (B) {
        q();
        B[_] = i[_];
    }

    // Save action remotely.
    else {
        var x = new XMLHttpRequest();
        x.onload = function() {

            // Problem with request. Report out-of-sync.
            if (x.status !== 200) {
                if (!D('Q')) {
                    y = e('div');
                    y.id = 'Q';
                    a(d.body, y);
                }
            }

        }
        x.open('POST', [$, _].join('-'));
        x.send();
    }
}
