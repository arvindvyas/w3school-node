
// creqate http server
var http = require('http');

// require module
var dt = require('./myfirstmodule');
var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
  
rs.on('open', function() {
	console.log('the file is open');
});

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plan'});
	res.write("The date and time are currently: " + dt.myDateTime());
	res.end();
}).listen(8080)

