module.exports = function (sequelize, DataTypes) {
    return sequelize.define('purchase', {
        products: {
            type: DataTypes.ARRAY,
            allowNull: false
        },
        options: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}