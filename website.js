const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

let indexFile;

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/site/index.html'));
});

app.listen(port);
console.log(`Server running at http://localhost:${port}/`);
