const { createServer } = require('node:http'); //node.js

const hostname = '127.0.0.1'; //localhost
const port = 3000; //Port (except 21 23 80 ...)

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World Quoc anh tutin');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
