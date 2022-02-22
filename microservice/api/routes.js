'use strict';
// enforce secure coding practice
const controller = require('./controller');

module.exports = function(app) {
    app.route('/about')
        .get(controller.about);
    app.route('/distance/:zipcode1/:zipcode2')
        .get(controller.getDistance);
    app.route('/alert')
        .get(controller.alert);
}