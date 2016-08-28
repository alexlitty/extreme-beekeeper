/**
 * Initialize our local game instance.
 */
R('load', function() {

    // Initialize game instance.
    var i = new I(),

    // Get user interface elements.
        h = document.getElementById("h"); 

    // Kick off game.
    Z(function() {
        i.t();
        W(h,i.h);
    }, 1000/f);

});
