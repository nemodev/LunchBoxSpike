var http=require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function(request, response){
	fs.readFile('InputRecord.html', function(error,data){
		response.writeHead(200, {'Content-Type':'text/html'});
		response.end(data);
	});
}).listen(52273, function() {
	
});

var io = socketio.listen(server);
io.sockets.on('connection', function(socket){
	socket.on('record', function(data){
		debugger;
		console.log(data);
	});
});