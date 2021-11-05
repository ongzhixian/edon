import http from "http";

import { requestUrlMap } from "./requestUrlMap.js";

const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {

    const request_url = req.url.toLowerCase();

    if (request_url in requestUrlMap) {
        requestUrlMap[request_url](req, res);
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }

    // switch (req.url) {
    //     case "/api":
            
    //     default:
    //         res.writeHead(404, { "Content-Type": "application/json" });
    //         res.end(JSON.stringify({ message: "Route not found" }));
    //         break;
    // }
    
    //set the request route
    // if (req.url === "/api" && req.method === "GET") {
    //     //response headers
    //     res.writeHead(200, { "Content-Type": "application/json" });
    //     //set the response
    //     res.write("Hi there, This is a Vanilla Node.js API");
    //     //end the response
    //     res.end();
    // }

    // if (req.url === "/hello" && req.method === "GET") {
    //     res.writeHead(200, {'Content-Type': 'text/plain'});
    //     res.end('Hello World\n');
    // }

    // // If no route present
    // else {
    //     res.writeHead(404, { "Content-Type": "application/json" });
    //     res.end(JSON.stringify({ message: "Route not found" }));
    // }

});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Application started at: http://${HOSTNAME}:${PORT}`);
});







// import { createServer } from "http";
// // const Todo = require("./controller");
// import { Controller as Todo } from "./controllers";
// import http = require('http') //Common JS
//import * as http from 'http'; //ES 6


// import * as http from "http";
// import { Controller } from './controller';
// import { getReqData } from "./util";