var http = require('http');
var port = 8080;
var ip = '127.0.0.1';
var URLStorage = {};
var server = http.createServer(function(request, response){
	console.log(request);
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Server Reached");
});
server.listen(port, ip);
console.log('Server listening on port 8080 of localhost');