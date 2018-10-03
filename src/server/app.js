var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);

// Je moet morgen even uitzoeken, als je localhost:8080 opent waarom hij je test.js en css files enzo niet compiled
// Waarschijnlijk moeten ze geminified worden of misschien helemaal niet.
