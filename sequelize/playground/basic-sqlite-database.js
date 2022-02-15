var Sequelize= require('sequelize');
var _order = require('../models/Order.js');
var _orderDetail = require('../models/orderDetail.js');
var _Company_Parameters = require('../models/Company_Parameters.js');

//var sequelize = require('../data/dev-corporate-api.sqlite');

var sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': '../data/dev-corporate-api.sqlite'
    //'storage':  __dirname + '/basic-sqlite-database.sqlite'
});
var Order = _order(sequelize);
var orderDetail = _orderDetail(sequelize);
var Company_Parameters = _Company_Parameters(sequelize);

sequelize.sync({force: true}).then(function () {
    console.log('Everything is synced!!!');

   Order.create({
        id_: 1,
        name: 'deneme',
        orderDate: new Date().setDate(new Date().getDate() - 5),
        company_id: 'Corebit',
        müşteri_id: 'Turcell'
    }).then(Order.create({
        id_: 2,
        name: 'deneme2',
        orderDate: new Date().setDate(new Date().getDate() - 4),
        company_id: 'Corebit',
        müşteri_id: 'Turcell'
    })).then(Order.create({
        id_: 3,
        name: 'deneme3',
        orderDate: new Date().setDate(new Date().getDate() - 3),
        company_id: 'Corebit',
        müşteri_id: 'Turcell'
    })).then(Order.create({
        id_: 4,
        name: 'deneme4',
        orderDate: new Date().setDate(new Date().getDate() - 2),
        company_id: 'Corebit',
        müşteri_id: 'Turcell'
    })).then(Order.create({
        id_: 5,
        name: 'deneme5',
        orderDate: new Date().setDate(new Date().getDate()),
        company_id: 'Corebit',
        müşteri_id: 'Turcell'
    })).then(orderDetail.create({
            id_: 1,
            detailDesc: 'abc1',
            type: 'sandalye',
            price: 300
        }).then(orderDetail.create({
            id_: 2,
            detailDesc: 'abc2',
            type: 'masa',
            price: 400
        })).then(orderDetail.create({
            id_: 3,
            detailDesc: 'abc3',
            type: 'sandalye',
            price: 500
        })).then(orderDetail.create({
            id_: 3,
            detailDesc: 'abc4',
            type: 'sandalye',
            price: 600
        })).then(Company_Parameters.create({
            type: 'username',
            value: 'turcell123',
            company_id: 'turcell'
        }).then(Company_Parameters.create({
            type: 'vergi_no',
            value: '12345',
            company_id: 'digiturk'
        }).then(Company_Parameters.create({
            type: 'fiyat_limiti',
            value: '100',
            company_id: 'turcell'})
        ).then(Company_Parameters.create({
            type: 'fiyat_limiti',
            value: '600',
            company_id: 'Corebit'
        }))
            )
        )
    ).catch(function(e) {
        console.log(e);
    })
});