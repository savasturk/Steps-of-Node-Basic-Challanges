var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('Company_Parameters', {
        id_: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
         },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        value: {
            type: Sequelize.STRING,
            allowNull: false
        },
        company_id: {
            type: Sequelize.STRING,
            allowNull: false,
            reference: {
                model: 'Order',
                key: 'company_id'
            }
        }
    })
}