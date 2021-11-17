const express = require(`express`);
const cors = require('cors');

const parser = require(`body-parser`);
const app = express();
const EventEmitter = require(`events`);

const Stream = new EventEmitter();

app.use(parser.json());
app.use(
    parser.urlencoded({
        extended: true
    })
);

app.get('/my-endpoint', 
    function(request, response) {
        // res.header("Access-Control-Allow-Origin", "*");
        response.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*',
            Connection: 'keep-alive'
        });

        Stream.on('push', function(event, data) {
            response.write('event: ' + String(event + '\n' + 'data: ' + JSON.stringify(data) + '\n\n'));
        });
    }
);

let beat = 0;

setInterval(function () {
    Stream.emit('push', 'message', { 
        msg: `it works! ${beat++}`
    });
    console.log(`Fire ${beat}`)
}, 1600); // Fires every 1.6 seconds

app.use(cors())

app.listen(3000);

console.log('Express sse mock server running');