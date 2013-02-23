var http = require('http');

exports.meta = {
	name: 'vanilla http',
	url: 'http://nodejs.org/api/http.html',
	port: 8003
}

exports.start = function (cb) {
	http.createServer(function(req, res) {
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		res.end('Hello World\n');
	}).listen(8003, '127.0.0.1');

	cb();
}