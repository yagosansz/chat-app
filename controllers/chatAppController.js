module.exports = function(io) {
  // once a connection has been made, a callback function will be fired
  io.on('connect', function(socket) {
    // socket.id -> unique channel through which client and server can communicate
    console.log('made socket connection... ' + socket.id);
  });
};
