module.exports = function(sequelize, DataTypes){
    return sequelize.define('Company_Parameters', {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Company_id: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}