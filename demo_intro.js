
// creqate http server
var http = require('http');

// require module
var dt = require('./myfirstmodule');
var fs = require('fs');
var events = require('events');


// create object
var eventEmitter = new events.EventEmitter();

var rs = fs.createReadStream('./demofile.txt');
  

//Create an event handler:

var myEventHandler = function() {
	console.log('I hear a scream');
}

// Assign the event handler to an event
eventEmitter.on('scream', myEventHandler)


//Fire the 'scream' event:
eventEmitter.emit('scream');


// create the fuction for file open
rs.on('open', function() {
	console.log('the file is open');
});

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plan'});
	res.write("The date and time are currently: " + dt.myDateTime());
	res.end();
}).listen(8080)

