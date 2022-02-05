var user = require('./user.js');
var products = require('./product.js');

moduler.exports = function(userId, products, options) {
    return new Promise(function (resolve, reject) {
        if(!userId || !products || !options) {
            return reject('Missed items');
        }
        user(userId).then(function (userId) {
             getUser(userId);
        }).then(function (products) {
            products.getProducts(products);
        }).
        catch(function (error) {
            reject(error);
        })
    });
};