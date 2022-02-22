
// Calling requie on a JavaScript file will run the code in the file and return the value of 'module.exports'
/*var returnHello = helpers.sayHello('Pinar');
console.log(returnHello);
var returnWelcome = helpers.sayWelcome('Pinar');
console.log(returnWelcome);*/

// Solution
/*const helpers = require('./helper.js');
helpers.executionDurations('test', 'test2', 5);*/
let CronoPromise = require('crono-promise');
const boo = (index) => {
    //return 'boo';
}
const foo = (name, desc) => {
    new CronoPromise([5], boo, function(resolve, reject) {
        setTimeout(function () {
            resolve(boo(5))
        }, Math.random() * 500)
    })
    return 'foo';
}

/*let t = new CronoPromise((resolve, reject) => setTimeout(() => resolve('boo'), 100))
        .then(() => new CronoPromise((resolve, reject) => resolve('foo')))*/
     

/*let r = new CronoPromise((resolve, reject) =>
 setTimeout(() => resolve(foo('test', 'test2')), 100))
*/
const fooTest = (name, desc) => {
    new CronoPromise([name, desc], foo, function(resolve, reject) {
        setTimeout(function () {
            resolve(foo(name, desc));
        }, Math.random() * 500)
    })
}

function soon (val) {
    return new CronoPromise(function (resolve, reject) {
      setTimeout(function () {
        resolve(val)
      },
        Math.random() * 500)
    })
  }
  /*CronoPromise.all([soon(1), soon(2), soon(3)]).then(function (array) {
    console.log('This should be [1, 2, 3]:', array)
  })*/
  CronoPromise.all([new CronoPromise(['test', 'test2'], foo, function(resolve, reject) {
      setTimeout(function() {
          resolve(foo('test', 'test2'))
      }, 100)
  })]).then(function (array) {
      console.log('Results: ', array)
  })

