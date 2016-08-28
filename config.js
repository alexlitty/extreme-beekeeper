var fs = require('fs');

module.exports = {
    /**
     * When to expire cookies.
     *
     * Set as the farthest possible time for older browsers.
     */
    cookieExpiration: new Date(2147483647 * 1000),

    /**
     * Port for the server to listen on.
     */
    port: 8000,

    /**
     * Various paths used by the server.
     */
    path: {
        content: __dirname + '/client-min/',
        db: __dirname + '/db/'
    }
};
