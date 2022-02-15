var Sequelize = require('sequelize');
 module.exports =  function (sequelize) {
     return sequelize.define('Order', {
         id_: {
            type: Sequelize.INTEGER,
            allowNull: false,
            reference: {
                model: 'orderDetails',
                key: 'id_'
            },
            primaryKey: true
         },
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
            allowNull: false,
            reference: {
                model: 'Company_Parameters',
                key: 'company_id'
            },
            
        },
        müşteri_id: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
}
