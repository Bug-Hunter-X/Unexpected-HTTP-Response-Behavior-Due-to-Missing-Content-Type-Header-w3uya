const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain'); //Setting the Content-Type header
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});