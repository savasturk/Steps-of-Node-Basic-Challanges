var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js');
const moment = require('moment');
const { Sequelize } = require('./db.js');
const { include } = require('underscore');
const Op = require('sequelize').Op;
const STEP_G_2 = 'sandalye';
const STEP_G_6_TYPE = 'vergi_no';
const STEP_G_6_VALUE = '1234';

var app = express();
var PORT = process.env.PORT || 3000;

db.Order.hasMany(db.orderDetail, {foreignKey: 'id_'});
db.orderDetail.belongsTo(db.Order, {foreignKey: 'id_'});

db.Order.belongsTo(db.Company_Parameters, {foreignKey: 'company_id', targetKey: 'company_id'});

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

 function case5(req, res, whereCondition){
    var where = {
        type: {$like: '%' + STEP_G_2 +'%'}
    }
    db.Order.findAll({
        attributes: ['id_', 'company_id', 'müşteri_id', 'name', 'orderDate'],
        include: [{
            model: db.orderDetail,
            attributes: ['id_', 'detailDesc', 'type', 'price'] ,
            id_: Sequelize.col('Order.id_'),
            where: where
        },
        {
            model: db.Company_Parameters,
            attributes: ['company_id', 'type', 'value'],
            where: whereCondition,
            required: false
        }
    ]
    }).then(function (orders) {
        res.json(orders);
    }, function(e) {
        console.log('case 5 - error ', e);
        res.status(500).send();
    })
 }

 function case2 (req, res, attributeList) {
    var where = {};
    where = {
        type: {$like: '%' + STEP_G_2 +'%'},
    }
    db.Order.findAll({
        attributes: ['id_', 'company_id', 'müşteri_id', 'name', 'orderDate'],
        include: {
            model: db.orderDetail,
            attributes: attributeList,
            where: where
        }
    })
    .then(function (orders) {
        res.json(orders);
    }, function(e) {
        console.log('case 2 - error ', e);
        res.status(500).send();
    });
 }

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
            var attributeList = ['id_', 'detailDesc', 'type', 'price'];
            case2(req, res, attributeList);
            break;
        case 3:
            // COMPLETED: 3 in StepG
            var attributeList = ['type'];
            case2(req, res, attributeList);
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
            // COMPLETED: 5 in Step G
            var whereCompanyParameters = {
                company_id: {$like: Sequelize.col('Order.company_id')}
            }
            case5(req, res, whereCompanyParameters);
            break;
        case 6:
            // COMPLETED: 6 in Step G
            var whereCompanyParameters = {
                company_id: {$like: Sequelize.col('Order.company_id')},
                type: {$like: STEP_G_6_TYPE},
                value: {$like: STEP_G_6_VALUE}
            }
            case5(req, res, whereCompanyParameters);
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
