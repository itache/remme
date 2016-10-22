var express = require('express');
var assert = require('assert');
var bodyParser = require('body-parser');

var app = express();

app.use('/', express.static(__dirname + '/src'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/dist', express.static(__dirname + '/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 3000));

//For avoidong Heroku $PORT error
app.get('/', function (request, response) {
    response.sendFile(__dirname + '/src/index.html');
}).listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));
});