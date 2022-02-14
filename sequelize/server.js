var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js');
const moment = require('moment');
const { Sequelize } = require('./db.js');
const { include } = require('underscore');
const Op = require('sequelize').Op;
const STEP_G_2 = 'sandalye';
/*const Order = require('./models/Order.js')
const orderDetail = require('./models/orderDetail.js');*/

var app = express();
var PORT = process.env.PORT || 3000;

var orders = [] // Task1

 app.use(bodyParser.json());

 app.get('/', function(req, res) {
     res.send('Sequelize examples!!!');
 })

 app.get('/orders', function(req, res) {
     var where = {};

     db.Order.findAll({where: where}).then(function (order) {
         res.json(order);
     }, function(e) {
        res.status(500).send();
     })
 });

 //call  with /orders/1
app.get('/orders/:id',  function(req, res) {
    var requestId = parseInt(req.params.id, 10);
    switch(requestId) {
        case 1:
            // COMPLETED: 1 in StepG
            db.Order.findAll({where: 
                {
                orderDate: {
                    $lte: moment().subtract(2, 'days').toDate()
                }
            }
        }).then(function (orders) {
                res.json(orders);
            }, function(e) {
                res.status(500).send();
            });
            break;
        case 2:
            // TODO: 2 in StepG
            var where = {};
            const {id} = req.params;
            console.log('girdi');
            db.Order.hasMany(db.orderDetail, {foreignKey: 'id_'});
            db.orderDetail.belongsTo(db.Order, {foreignKey: 'id_'});
            var where = {
                type: {$like: '%' + STEP_G_2 +'%'}
            }
            db.Order.findAll({
                attributes: ['id_', 'company_id', 'müşteri_id', 'name', 'orderDate'],
                include: {
                    model: db.orderDetail,
                    attributes: ['id_', 'detailDesc', 'type', 'price'],
                    where: where
                }
            })
            .then(function (orders) {
                res.json(orders);
            }, function(e) {
                console.log('hata', e);
                res.status(500).send();
            })
        dafault:
            console.log('default of request');
    }
})

 db.sequelize.sync({/*force: true*/}).then(function () {
    app.listen(PORT, function () {
         console.log('Express listening on port: ' + PORT + '!');
     })
 })
