var express = require('express');
var app = express();

var port = process.env.PORT || 8000;

app.listen(port);
console.log('Server listening on port ' + port);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.status(200);
});
