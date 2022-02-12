var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js');

var app = express();
var PORT = process.env.PORT || 3000;

var orders = [] // Task1

 app.use(bodyParser.json());

 app.get('/', function(req, res) {
     res.send('Sequelize examples!!!');
 })

 app.get('/order', function(req, res) {
     var where = {};

     db.Order.findAll({where: where}).then(function (order) {
         res.json(order);
     }, function(e) {
        res.status(500).send();
     })
 })


 db.sequelize.sync({/*force: true*/}).then(function () {
    app.listen(PORT, function () {
         console.log('Express listening on port: ' + PORT + '!');
     })
 })
