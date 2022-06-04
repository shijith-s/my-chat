const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
const { socketController } = require("./controllers/socketController.js");

const PORT = 8000;

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: ["http://localhost:3000"],
    allowedHeaders: ["*"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("someone connected");
  socketController(socket);
});

server.listen(PORT, () => {
  console.log("Server listening on " + PORT);
});
