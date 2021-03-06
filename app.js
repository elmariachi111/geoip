
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var geoip = require("geoip-lite");
var clientip = require ('./clientip.js');
var app = express();



app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.get('/ip/:ip', function(req, res) {
    var geo = geoip.lookup(req.params.ip);
    res.json(geo);
});

app.get('/', function (req,res) {
    var ip = clientip(req);
    var geo = geoip.lookup(ip);
    res.json(geo);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

