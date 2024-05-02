const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const host = 'localhost';
const publicFolder = path.join(__dirname, '../public');
 
const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/' || url === '/home') {
    readFileAndResponse(res, 'index.html')
  } else if (url === '/cari') {
    readFileAndResponse(res, 'index.html')
  } else {
    readFileAndResponse(res, url)
  }
});

const readFileAndResponse = (res, filename) => {
  const filePath = path.join(publicFolder, filename);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.statusCode = 404;
        res.end('404 Not Found');
      } else {
        res.statusCode = 500;
        res.end('500 Internal Server Error');
      }
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(content);
    }
  });
}

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});