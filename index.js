var express = require('express');
var chatAppController = require('./controllers/chatAppController');
var socket = require('socket.io');

// application setup
var app = express();

// static files - not route specific
app.use(express.static('public'));

// listen to port
var server = app.listen(3000, () => {
  console.log('server is running on port: ' + server.address().port);
});

// socket up - the parameter represents what server you want to work with (backend)
var io = socket(server);

// fire controller
chatAppController(io)
