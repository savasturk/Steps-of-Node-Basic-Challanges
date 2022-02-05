module.exports = function (sequelize, DataTypes) {
    return sequelize.define('company', {
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        information: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}