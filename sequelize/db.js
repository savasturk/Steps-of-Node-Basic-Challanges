var Sequelize = require('sequelize');

var sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': __dirname + '/data/dev-corporate-api.sqlite'
    //'storage': __dirname + '/playground/basic-sqlite-database.sqlite'
});

var env = process.env.NODE_ENV || 'development';

var db = {};
db.Order = sequelize.import(__dirname + '/models/Order.js');
db.orderDetail = sequelize.import(__dirname + '/models/orderDetail.js');
db.Company_Parameters = sequelize.import(__dirname + '/models/Company_Parameters.js');

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;