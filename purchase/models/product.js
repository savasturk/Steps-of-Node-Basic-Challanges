module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product', {
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productInformation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stockCount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}