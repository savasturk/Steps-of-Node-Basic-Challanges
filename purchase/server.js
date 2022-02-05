var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js');
var createPurchase = require('./cretePurchases.js');

var app = express();
var PORT = process.env.PORT || 3000;

var purchases = [];
var puchaseNextId = 1;

app.use(bodyParser.json());

//POST
app.post('/purchases', function (req, res) {
    var body = _.pick(req.body, 'userId', 'products', 'options');

    if(!_.isArray(body.products) || !_.isString(body.options) || !body.options.trim.length === 0) {
        return res.status(404).send();
    }
    
    body.options = body.options.trim();
    body.id = puchaseNextId++;

    // TODO!
    //purchases.push(body);

    /*db.purchases.create(body).then(function (purchase) {      
        res.json(purchase.toJSON());
        }, function(e) {
            res.status(400).json(e);
        });*/
        createPurchase().then(function (purchase) {
            return 
        }).then(function(body) {

        }).catch(function (error) {
            console.log(error);
        })
});