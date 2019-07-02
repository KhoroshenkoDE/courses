var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

var users = [];
io.on('connection', function(socket) {
	console.log('A user connection');
	socket.on('setUsername', function(data) {
		console.log(data);
		if(users.indexOf(data) > -1) {
			console.log(data);
			socket.emit('userExists', '<p class="bg-primary>Пользователь' + 
										'<b>' + data + '</b>' + 
										'уже существует, выбирете другое имя!</p>');
		} else {
			users.push(data);
			socket.emit('userSet', {userName: data});
		}
	});

	socket.on('message', function(data) {
		io.sockets.emit('newMessage', data);
	});
});

http.listen(3000, function() {
	console.log('Go to localhost:3000');
});

// http.listen(3000, '192.168.0.73' || 'localhost' function() {
// 	console.log('Application work ' + process.pid + ' started...');
// });








