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
        //id: 3,
        name: 'deneme',
        orderDate: new Date().setDate(new Date().getDate() - 5),
        company_id: 'Corebit',
        müşteri_id: 'Turcell'
    }).then(Order.create({
        name: 'deneme2',
        orderDate: new Date().setDate(new Date().getDate() - 4),
        company_id: 'Corebit',
        müşteri_id: 'Turcell'
    })).then(Order.create({
        name: 'deneme3',
        orderDate: new Date().setDate(new Date().getDate() - 3),
        company_id: 'Corebit',
        müşteri_id: 'Turcell'
    })).then(Order.create({
        name: 'deneme4',
        orderDate: new Date().setDate(new Date().getDate() - 2),
        company_id: 'Corebit',
        müşteri_id: 'Turcell'
    })).then(Order.create({
        name: 'deneme5',
        orderDate: new Date().setDate(new Date().getDate()),
        company_id: 'Corebit',
        müşteri_id: 'Turcell'
    }))
    .then(
        orderDetail.create({
            //id: 5,
            order_id: 3,
            detailDesc: 'abc',
            type: 'sandalye',
            price: 300
        }).then(
            Company_Parameters.create({
                //Id: 1,
                type: 'username',
                value: 'turcell123',
                Company_id: 'turcell'
            }).then(
                Company_Parameters.create({
                    //Id: 2,
                    type: 'vergi_no',
                    value: '12345',
                    Company_id: 'digiturk'
                }).then(
                    Company_Parameters.create({
                        //Id: 3,
                        type: 'fiyat_limiti',
                        value: '100',
                        Company_id: 'turcell'
                    })
                )
            )
        )
    ).catch(function(e) {
        console.log(e);
    })
});