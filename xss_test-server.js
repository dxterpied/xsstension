var http = require('http');
var fs = require('fs');
var port = 8081;
var ip = '127.0.0.1';
var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};
var server = http.createServer(function(request, response){
	if (request.method === 'GET'){
		fs.readFile('./index.html', function(err, data){
			if (err){
				console.log(err)
			} else {
				response.writeHead(200, headers);
				response.end(data);
			}
		})	
	}
});
server.listen(port, ip);
console.log('Server listening on port 8081 of localhost');