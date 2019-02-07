module.exports = function(io) {
  // once a connection has been made, a callback function will be fired
  io.on('connect', function(socket) {
    // socket.id -> unique channel through which client and server can communicate
    console.log('made socket connection... ' + socket.id);
    // listen to message being sent from the client
    socket.on('chat', function(data) {
      // send message to all different clients connect to the server on a websocket
      // refers to all the socketS connected to the server
      io.sockets.emit('chat', data);
    });

    socket.on('typing', function(data) {
      // will emit to every single client, but not to the original one
      socket.broadcast.emit('typing', data);
    });
  });
};
