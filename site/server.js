const http = require('http');
const express = require('express');
const HTTP_PORT = 5000;

const app = express();

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: err
  });
});

app.use(express.static(__dirname + '/www'));

let httpServer = http.createServer(app);
httpServer.listen(HTTP_PORT, () => {
  console.log(`listening on http://localhost:${HTTP_PORT}!`);
});
