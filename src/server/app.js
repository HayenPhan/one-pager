const express = require('express');
const app = express();

// viewed at http://localhost:8080
app.use(express.static('src/server'))

app.listen(8080);
