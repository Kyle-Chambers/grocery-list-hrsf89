var database = require('../database/index.js')
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/add', function (req, res) {
  // console.log('get request to server')
  // console.log(typeof req.body, 'from server <><><><><><><>');
  database.save(req.body);

  res.status(201).send();
  
})

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

  