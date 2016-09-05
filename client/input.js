document.onclick = function($) {
    $ = $ || window.event;
    x = $.target || $.srcElement;

    // Link has been clicked.
    if (x.tagName == 'A') {
        //return false;
    }
}
