var fs = require('fs');
var express = require('express');

var data = fs.readFileSync('index.html');

var strdata = data.toString();
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(strdata);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
