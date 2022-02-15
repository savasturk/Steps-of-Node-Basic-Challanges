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

db.Order.hasMany(db.orderDetail, {foreignKey: 'id_'});
db.orderDetail.belongsTo(db.Order, {foreignKey: 'id_'});

db.Order.hasMany(db.Company_Parameters, {foreignKey: 'company_id'});
db.Company_Parameters.belongsTo(db.Order, {foreignKey: 'company_id'});


/*db.orderDetail.hasMany(db.Company_Parameters, {foreignKey: 'company_id'});
db.Company_Parameters.belongsTo(db.orderDetail, {foreignKey: 'company_id'});*/

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
                console.log('case 1 - error ', e);
                res.status(500).send();
            });
            break;
        case 2:
            // COMPLETED: 2 in StepG
            var where = {};
            where = {
                type: {$like: '%' + STEP_G_2 +'%'},
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
                console.log('case 2 - error ', e);
                res.status(500).send();
            });
            break;
        case 3:
            // can not defined difference between case 2 and 3
            // TODO: will be ask this difference
            break;
        case 4:
            // COMPLETED: 4 in Step G
            var where = {};
            var where = {
                type: {$like: '%' + STEP_G_2 +'%'},
                order_id: Sequelize.col('Order.id_')
            }
            db.orderDetail.findAll({
                attributes: ['id_', 'detailDesc', 'type', 'price'],
                include: {
                    model: db.Order,
                    attributes: [],
                    where: {
                        id_ : Sequelize.col('Order.id_')
                    }
                },
                where: where
            }).then(function (orderDetails) {
                res.json(orderDetails);
            }, function(e) {
                console.log('case 4 - error ', e);
                res.status(500).send();
            })
            break;
        case 5:
            // TODO:: 5 in Step G
            var where = {};
            where = {
                type: {$like: '%' + STEP_G_2 +'%'}
            }
            var whereParameters = {
                company_id: {$like: '%' + Sequelize.col('Company_Parameters.company_id') + '%'}
            }
            db.Order.findAll({
                //attributes: ['id_', 'detailDesc', 'type', 'price'],
                include: [{
                    model: db.orderDetail,
                    attributes: ['id_', 'detailDesc', 'type', 'price'] ,
                    id_: Sequelize.col('Order.id_'),
                    where: {
                        type: {$like: '%' + STEP_G_2 +'%'}
                    }

                }/*,
                {
                    attributes: ['company_id', 'type'],
                    model: db.Company_Parameters,
                    where: {
                        company_id: Sequelize.col('Order.company_id')
                    }
                }*/],
                include: {
                    model: db.Company_Parameters,
                },
                where: {
                    company_id: Sequelize.col('Company_Parameters.company_id')
                }
                /*,
                where: {
                    company_id: Sequelize.col('Company_Parameters.company_id')
                }*/
            }).then(function (orders) {
                res.json(orders);
            }, function(e) {
                console.log('case 5 - error ', e);
                res.status(500).send();
            })
            break;
        dafault:         
            console.log('default of request');
    }
})

 db.sequelize.sync({/*force: true*/}).then(function () {
    app.listen(PORT, function () {
         console.log('Express listening on port: ' + PORT + '!');
     })
 })
