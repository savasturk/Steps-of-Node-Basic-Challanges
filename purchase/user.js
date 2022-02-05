var db = require('./db.js');
var _ = require('underscore');
var INSTITUTIONAL = 'kurumsal';


    function getUser (userId) {
        return new Promise(function (resolve, reject) {
            db.user.findById(userId).then(function (user) {
                if (!!user) {
                    // run only true
                    try {
                        var userType = _.pick(user, 'type');
                        if (userType === INSTITUTIONAL) {
                            getCompany(userType);
                            resolve('Company informations fetched!');
                        }
                        
                    } catch (e) {
                        reject(e);
                    }

                } else {
                    reject(404 + ' error handled!');
                }
            }, function (e) {
                reject(500 + ' error handled!');
            })
        });
        
    }

    function getCompany(userType) {
        return new Promise(function (resolve, reject) {
            var where = {};
            where.type = userType;
            db.company.findAll({where: where}).then(function (companies) {
                companies.forEach(function (company) {
                   console.log('Company information: ' + company.information); 
                });
                resolve('Company information printed!');
            }, function(e) {
                reject(e);
            })
        });
    }

    /*getUser(userId).then(function (userId) {
        return getCompany(userId);
    }).catch(function (error) {
        console.log(error);
    })*/

