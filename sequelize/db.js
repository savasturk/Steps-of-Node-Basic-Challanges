var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var sequelize;

if (env === 'production') {
    sequelize = new Sequelize(process.env.DATABSE_URL, {
        dialect: 'postgres'
    });
} else {
    sequelize = new Sequelize(undefined, undefined, undefined, {
        'dialect': 'sqlite',
        'storage': __dirname + '/data/dev-corporate-api.sqlite'
    });
}

var db = {};
db.corporate = sequelize.import(__dirname + '/models/Order.js');
db.corporate = sequelize.import(__dirname + '/models/orderDetail.js');
db.corporate = sequelize.import(__dirname + '/models/Company_Parameters.js');

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;