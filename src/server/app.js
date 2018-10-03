var express = require('express');
var app = express();

// viewed at http://localhost:8080
app.use(express.static('src/server'))

app.listen(8080);

// Je moet morgen even uitzoeken, als je localhost:8080 opent waarom hij je test.js en css files enzo niet compiled
// Waarschijnlijk moeten ze geminified worden of misschien helemaal niet.
