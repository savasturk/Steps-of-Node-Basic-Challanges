module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        orderDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        company_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        müşteri_id: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}