var Hapi = require('hapi');

exports.meta = {
	name: 'hapi',
	url: 'https://github.com/walmartlabs/hapi',
	port: 8000
}

exports.start = function(cb) {
	// Create a server with a host and port
	var server = new Hapi.Server('localhost', 8000);

	// Define the route
	var hello = {
		handler: function(request) {
			request.reply({
				greeting: 'hello world'
			});
		}
	};

	// Add the route
	server.route({
		method: 'GET',
		path: '/hello',
		config: hello
	});

	// Start the server
	server.start();

	cb();
}