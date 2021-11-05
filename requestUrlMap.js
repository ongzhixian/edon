import http from "http";

export const requestUrlMap = {
    "/api" : function(req, res) {
        
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write("Hi there, This is a Vanilla Node.js API");
        res.end();
    },
    "/api2" : function(req, res) {
        
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write("Hi there, This is a Vanilla Node.js API 2");
        res.end();
    }
};