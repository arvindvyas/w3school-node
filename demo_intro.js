
// creqate http server
var http = require('http');

// require module
var dt = require('./myfirstmodule');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plan'});
	res.write("The date and time are currently: " + dt.myDateTime());
	res.end();
}).listen(8080)

