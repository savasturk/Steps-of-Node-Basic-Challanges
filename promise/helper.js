
//To export code from a file, we assign values to the file's 'module.exports' object.
// Require helps us load modules. To import coe from a file, we must pass the file's path to require: <require('./filepath')>
/*module.exports = {
    sayHello: function(name) {
        return `Hello ${name}`;
    },
    sayWelcome: function(name){
        return `Welcome ${name}`;
    }
}*/
const boo = (index) => {
}
const foo = (name, desc) => {
    return 'success';
}
function dateAndTime(currentDate){
    let date = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    return `${date}/${month}/${year} ${hours}:${minutes} ${seconds}`
}
module.exports = {
  executionDurations: function(param1, param2, param3) {
      // param1 = 'test'
      // param2 = 'test2'
      // param3 = 5
      // params passed by index.js
      var resultFoo;
    return new Promise(function (resolve, reject) {
         let startTime = dateAndTime(new Date());
         console.log(`foo başladı ${startTime} parametreler: ${param1} ${param2}`)
         setTimeout(function() {
         return resolve(foo(param1, param2));
        }, 1000);
    }).then((foo) => {
        resultFoo = foo;
        let startTime = dateAndTime(new Date());
        console.log(`boo başladı ${startTime} parametreler: ${param3}`);   
        setTimeout(function() {     
            return new Promise((resolve, reject) => {
                resolve(boo(param3));
           }).
           then(function(boo) {
               let finishTime = dateAndTime(new Date());
               console.log(`boo bitti ${finishTime} return: ${(boo) ? boo : ""}`);
           }).catch(err => {
               reject(`unable boo creation: ${err}`);
           });
        }, 1000);
    }).then(function(_resultFoo) {
        _resultFoo = resultFoo;
        setTimeout(function() { 
        let finishTime = dateAndTime(new Date());
        console.log(`foo bitti ${finishTime} return: ${_resultFoo}`);
    }, 1000);
    }).catch(err => {
        reject(`unable foo creation: ${err}`);
    });
  }
}

// output
/*
foo başladı 11/1/2022 16:26 22 parametreler: test test2
boo başladı 11/1/2022 16:26 23 parametreler: 5
boo bitti 11/1/2022 16:26 24 return: 
foo bitti 11/1/2022 16:26 24 return: success
*/