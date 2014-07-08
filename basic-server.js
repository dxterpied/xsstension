var http = require('http');
var port = 8080;
var ip = '127.0.0.1';
var URLStorage = [];
var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};
var server = http.createServer(function(request, response){
	var url = request.headers.referer;
	if (request.method === 'POST'){
		URLStorage.push(url);
	}
	if (request.method === 'GET'){
		var result = URLStorage.shift();
	}
	response.writeHead(200, headers);
	response.end(JSON.stringify(result));
});
server.listen(port, ip);
console.log('Server listening on port 8080 of localhost');