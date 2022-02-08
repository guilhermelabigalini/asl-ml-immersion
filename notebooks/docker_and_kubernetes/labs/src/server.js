var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello World -v2 !" + (new Date()) + "\n");
}
var www = http.createServer(handleRequest);
www.listen(8000);
