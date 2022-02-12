var Sequelize = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('orderDetail', {
        order_id: {
            type: Sequelize.INTEGER,
            allowNull: false
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