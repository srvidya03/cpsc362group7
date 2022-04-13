var MongoClient = require('mongodb').MongoClient;
var db_name = 'TestDB'
var url = 'mongodb://127.0.0.1:27017/' + db_name;

MongoClient.connect(url, function(err, db) {
	// This will connect to the DB if it already exists
	// or create it if it doesn't exist.
	if (err) throw err;
	console.log('Database connected!');
	db.close();
});

const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/site/index.html'));
});

app.listen(port);
console.log(`Server running at http://localhost:${port}/`);
