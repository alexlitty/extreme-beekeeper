/**
 * Sends a request to the server.
 */
function Q($) {
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
    x.open('POST', $);
    x.send();
}
