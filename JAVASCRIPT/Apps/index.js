// simple HTTP server in Node.js
// File: JAVASCRIPT/Apps/index.js
// To run this code, use the command: node JAVASCRIPT/Apps/index.js
// Then open your browser and navigate to http://
// nodejs.org / Usage and examles / Simple HTTP server

const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});