var express = require('express');
var app = express();

// Serve static files.
app.use(express.static('www'));

// Start server.
app.listen(8000, function() {
    console.log("Beekeeper Server Started");
});
