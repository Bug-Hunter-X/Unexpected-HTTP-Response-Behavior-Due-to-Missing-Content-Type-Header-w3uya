const http = require('http');

const server = http.createServer((req, res) => {
  // Without setting Content-Type, the response may be unexpected
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});