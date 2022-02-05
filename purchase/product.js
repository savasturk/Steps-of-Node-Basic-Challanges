var db = require('./db.js');

function getProducts(products){
    return new Promise(function (resolve, reject) {
        var where = {};

        products.forEach(function (product) {
            try {
                where.productName = product;
                // I will continue!!
                db.product.findAll({where: where}).then(function (product) {
                    // Only 1 company with same product name!
                    if (product.length === 0) {
                        reject('Product was not found');
                    } else {
                        if (product.stockCount === 0) {
                            reject('Product not include valid stock count');
                        } else if (product.price === 0) {
                            // Store on freeOrderTracking
                        }
                    }
                }, function(e) {
                    reject(e);
                })
            } catch (e) {
                reject('Product not found in product table!');
            }
        })
    })
}