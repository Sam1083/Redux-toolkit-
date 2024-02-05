const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./Config/connectDb");
const routes = require("./Routes/index");
const { Server } = require("socket.io");
const http = require("http");
const cors=require("cors")
const dotenv=require("dotenv").config();


connectDB();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());
app.use(cors("*"));
app.use("/api", routes);

const server = http.createServer(app); // Create HTTP server

const io = new Server(server, {
  cors: {
    // origin: "*",
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },  
});

// Allow requests from 'http://localhost:3000'
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));



io.on('connection', (socket) => {
  console.log(`A user connected: ${socket.id}`);


  socket.emit('set-cookie', { name: 'yourCookieName', value: 'cookieValue', options: { sameSite: 'None', secure: true } });

  socket.on("message", (data) => {
    console.log(`Message received from ${socket.id}: ${data.content}`);
    io.emit("message", data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
  });
});

// Define your normalization function
function normalizePort(val) {
  var normalizedPort = parseInt(val, 10);

  if (isNaN(normalizedPort)) {
    // named pipe
    return val;
  }

  if (normalizedPort >= 0) {
    // port number
    return normalizedPort;
  }

  return false;
}

// Normalize the port
const normalizedPort = normalizePort(process.env.PORT || "3000");
app.set("port", normalizedPort);

// Listen on the normalized port
server.listen(normalizedPort, () => {
  console.log(`Server is running on port ${normalizedPort}`);
});

server.on("error", (error) => {
  console.error(`Server error: ${error}`);
});

server.on("listening", () => {
  console.log(`Server is listening on port ${normalizedPort}`);
});
