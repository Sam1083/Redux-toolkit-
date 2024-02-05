const express = require("express");
const app = express();
const PORT = 5000;
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");

app.use(cors("*"));

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const io = new Server(server);

io.on('connection', (socket) => {
  console.log(`A user connected: ${socket.id}`);

  socket.on("message", (data) => {
    console.log(`Message received from ${socket.id}: ${data.content}`);
    io.emit("message", data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
  });
});
