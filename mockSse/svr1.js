// const engine = require('engine.io');
// const server = engine.listen(45000);

// server.on('connection', socket => {
//   socket.send('utf 8 string');
//   socket.send(Buffer.from([0, 1, 2, 3, 4, 5])); // binary data
// });

// Working 1
const engine = require('engine.io');
const http = require('http').createServer().listen(45000);
const server = engine.attach(http, {
    cors: {
      origin: "http://localhost:4200"
    }
});

server.on('connection', socket => {
  
  console.log("user connected");
  socket.send("WELCOME\n");

  socket.on('message', data => {
    try {
      
      console.log("Message Received: " + data);
      socket.send("Received: " + data); 
    } catch (error) {
      console.log("SOme error occrred");
    }
  });

  socket.on('close', () => { 
      console.log("user disconnected");
  });
});

// const httpServer = require('http').createServer().listen(45000);
// const io = require("socket.io")(httpServer, {
//     cors: {
//       origin: "http://localhost:4200",
//       methods: ["GET", "POST"]
//     }
//   });

//   io.on('connection', socket => {
  
//   console.log("user connected");

//   io.on('message', data => { 
//     console.log("Message Received: " + data);
//   });

//   io.on('close', () => { 
//       console.log("user disconnected");
//   });
// });