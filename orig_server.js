var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('iclimate', ['storylist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/storylist', function(req, res) {
	console.log("I received a GET request");

	db.storylist.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.post('/storylist', function(req, res) {
	console.log(req.body);
	db.storylist.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

app.listen(3000);
console.log("server running on port 3000");