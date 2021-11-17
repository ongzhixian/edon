// let app = require('express')();
// let http = require('http').Server(app);
// let io = require('socket.io')(http);

// const socket = io("ws://localhost:45000");

// socket.on("connect", () => {
//   // either with send()
//   socket.send("Hello!");

//   // or with emit() and custom event names
//   socket.emit("salutations", "Hello!", { "mr": "john" }, Uint8Array.from([1, 2, 3, 4]));
// });

// // handle the event sent with socket.send()
// socket.on("message", data => {
//   console.log(data);
// });

// // handle the event sent with socket.emit()
// socket.on("greetings", (elem1, elem2, elem3) => {
//   console.log(elem1, elem2, elem3);
// });

const { Socket } = require('engine.io-client');
const socket = new Socket('ws://localhost:45000');
socket.on('open', () => {
  socket.send('sadsad');

  socket.on('message', (data) => {
    console.log(data);
  });
  socket.on('close', () => {
    console.log('close');
  });
});