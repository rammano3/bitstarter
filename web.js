var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 var k = fs.readFileSync('index.html','utf8');
 buf = new Buffer(k.length);
 len = buf.write(k,0);
 response.send(buf.toString('utf8',0,len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
