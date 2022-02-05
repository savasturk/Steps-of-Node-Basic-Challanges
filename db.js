var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var sequelize;

if (env === 'production') {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'pstgres'
    });
} else {
    sequelize = new Sequelize(undefined, undefined, undefined, {
        'dialect': 'sqlite',
        'storage': __dirname + '/data/dev-prchase-api.sqlite'
    });
}

var db = {};

db.purchase = sequelize.import(__dirname + '/models/purchase.js');
db.user = sequelize.import(__dirname + '/models/user.js');
db.company = sequelize.import(__dirname + '/models/company.js');
db.product = sequelize.import(__dirname + '/models/product.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;