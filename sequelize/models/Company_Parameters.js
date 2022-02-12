var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('Company_Parameters', {
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        value: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Company_id: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}