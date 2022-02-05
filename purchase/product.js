var db = require('../db.js');

function getProducts(products){
    return new Promise(function (resolve, reject) {
        var where = {};

        products.forEach(function (product) {
            try {
                where.productName = product;
                // I will continue!!
            } catch (e) {
                reject('Product not found in product table!');
            }
        })
    })
}