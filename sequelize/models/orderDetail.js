var Sequelize = require('sequelize');
var Order = require('./Order.js');
module.exports = function(sequelize) {
    return sequelize.define('orderDetail', {
        id_: {
            type: Sequelize.INTEGER,
            allowNull: false,
            reference: {
                model: 'Order',
                key: 'id_'
            }
        },
        detailDesc: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
}