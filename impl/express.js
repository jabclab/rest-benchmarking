var express = require('express');

exports.meta = {
	name: 'express',
	url: 'http://expressjs.com/guide.html',
	port: 8002
}

exports.start = function(cb) {
	var app = express();

	app.get('/hello', function(req, res) {
		res.send('Hello World');
	});

	app.listen(8002);

	cb();
};