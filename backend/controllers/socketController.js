exports.socketController = (socket) => {
  // console.log(socket.id);
  socket.on("joined-user", (name) => {
    socket.broadcast.emit("message", `${name} joined`);
    console.log(`${name} joined`);
  });
  socket.on("message", (message) => {
    socket.broadcast.emit("message", message.message);
  });
};
