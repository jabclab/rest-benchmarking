// Start all the servers and then run a distributed load test (using https://github.com/benschmaus/nodeload) on each
var impls = [
	require('./impl/hapi'), 
	require('./impl/restify'), 
	require('./impl/express'), 
	require('./impl/vanilla_http')
];

impls.forEach(function (impl) {
	// Start the server for this implementation
	impl.start(function () {
		// Get the metadata for the impl and run the distributed load test
		var meta = impl.meta;
		console.log(meta.name + ' ready on port ' + meta.port);

		// TODO: Start the distributed load test
	});
})

