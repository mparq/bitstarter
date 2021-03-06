var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html').toString())
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
