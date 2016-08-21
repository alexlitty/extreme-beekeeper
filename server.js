var express = require('express');
var compression = require('compression');
var app = express();

// Enable gzip compression.
app.use(compression({
    threshold: 0,
    filter: function(req, res) {
        return true;
    }
}));

// Serve static files.
app.use(express.static('www'));

// Start server.
app.listen(8000, function() {
    console.log("Beekeeper Server Started");
});
