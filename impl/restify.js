var restify = require('restify');

exports.meta = {
	name: 'restify',
	url: 'https://github.com/mcavage/node-restify',
	port: 8001
}

exports.start = function (cb) {
	var server = restify.createServer({
		name: 'myapp',
		version: '1.0.0'
	});

	server.use(restify.acceptParser(server.acceptable));
	server.use(restify.queryParser());
	server.use(restify.bodyParser());

	server.get('/echo/:name', function(req, res, next) {
		res.send(req.params);
		return next();
	});

	server.listen(8001, cb);
}