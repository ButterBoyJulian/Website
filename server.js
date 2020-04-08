const http = require('http');
const fs = require('fs');

const { PORT } = require('./config.json');

var express = require('express');
var app = express();

app.use(express.static('node_modules/'));
// p5js
app.use(express.static('public'));
app.use(express.static('node_modules/p5/lib'));
app.use(express.static('node_modules/p5/lib/addons'));

var listener = app.listen(PORT, function () {
  console.log('The server is listening on port ' + listener.address().port);
});

const socket = require('socket.io');
const io = socket(listener);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log("New Connection: " + socket.id);
}

//require('./src/(File).js');

console.log("Server is Running!");
