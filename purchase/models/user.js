module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}