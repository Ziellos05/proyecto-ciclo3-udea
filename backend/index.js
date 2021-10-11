var express = require('express');
const http = require('http');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.set("port", 3001)
const server = http.createServer(app)
server.listen(3001)