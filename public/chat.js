// make connection - frontend
var socket = io.connect('http://localhost:3000');

// query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

// emit events
btn.addEventListener('click', function() {
  // emit an event (message) that we can receive on the client
  // send it through the socket down the webserver
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener('keypress', function() {
  socket.emit('typing', handle.value);
});

// listen for events on the frontend - data coming back from the server
socket.on('chat', function(data) {
  feedback.innerHTML = '';
  output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
  message.value = '';
});

socket.on('typing', function(data) {
  feedback.innerHTML = '<p><em>' + data + ' is typing a message...' + '</em></p>';
});
