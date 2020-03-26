const http = require('http');
const fs = require('fs');

const { PORT } = require('./config.json');

var express = require('express');
var app = express();

app.use(express.static('node_modules/'));

var listener = app.listen(PORT, function () {
  console.log('The server is listening on port ' + listener.address().port);
});

//require('./src/(File).js');

console.log("Server is Running!");
