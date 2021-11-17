let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let url = require("url");
const cors = require('cors');


io.on("connection", socket => {
  // Log whenever a user connects
  console.log("user connected");

  // Log whenever a client disconnects from our websocket server
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });

  // When we receive a 'message' event from our client, print out
  // the contents of that message and then echo it back to our client
  // using `io.emit()`
  socket.on("message", message => {
    console.log("Message Received: " + message);
    io.emit("message", { type: "new-message", text: message });
  });
});

// let [socketioUpgradeListener, apolloUpgradeListener] = http.listeners('upgrade').slice(0);

// http.removeAllListeners('upgrade');

// http.on('upgrade', (req, socket, head) => {
//   const pathname = url.parse(req.url).pathname;
//   console.log(`pathname is [${pathname}]`)

//   if (pathname == '/socket.io/') {
//     console.log('socketioUpgradeListener');
//     socketioUpgradeListener(req, socket, head);
//   } else if (pathname == '/graphql')
//     apolloUpgradeListener(req, socket, head);
//   else {
//     console.log("destroy");
//     socket.destroy();
//   }
    
// });


app.use(cors());

// Initialize our websocket server on port 45000
http.listen(45000, () => {
  console.log("started on port 45000");
});

