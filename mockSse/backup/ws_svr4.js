let http = require('http');
let express = require('express');
let socketio = require('socket.io');
let websocket = require('ws');

let httpServer = http.createServer();

let expressApp = express();
httpServer.on('request', expressApp);

let socketioServer = socketio(httpServer, { path: '/aaaaa/socket.io/' });

socketioServer.of('/').on('connect', () => {});

let websocketServer = new websocket.Server({ server: httpServer, path: '/aaaaa/graphql' });

httpServer.listen(45000, () => console.log('started'));

let [socketioUpgradeListener, apolloUpgradeListener] = httpServer.listeners('upgrade').slice(0);
httpServer.removeAllListeners('upgrade');
httpServer.on('upgrade', (req, socket, head) => {
  const pathname = url.parse(req.url).pathname;
  if (pathname == '/aaaaa/socket.io/')
    socketioUpgradeListener(req, socket, head);
  else if (pathname == '/aaaaa/graphql')
    apolloUpgradeListener(req, socket, head);
  else
    socket.destroy();
});