const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  const html = fs.readFileSync(path.resolve(__dirname, './index.html'))
  res.end(html);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});