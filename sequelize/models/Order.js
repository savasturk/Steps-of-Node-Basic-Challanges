var Sequelize = require('sequelize');

 module.exports =  function (sequelize) {
     return sequelize.define('Order', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        orderDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        company_id: {
            type: Sequelize.STRING,
            allowNull: false
        },
        müşteri_id: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
}
