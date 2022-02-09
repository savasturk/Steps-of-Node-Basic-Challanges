import waterfall from 'async/waterfall'
//var waterfall = require('async-waterfall');
// each passing their results to the next in array iff pass an error own callback
// next function is not executed
async.waterfall([
    function(callback) {
        callback(null, 'one', 'two');
    }, 
    function(arg1, arg2,callback) {
        // arg1 now equals 'one' and arg2 now equals 'two'
        console.log(`arg1: ${arg1}, arg2: ${arg2}`);
        callback(null, 'three');
    }, 
    function(arg1, callback) {
        // arg1 now equals 'three'
        console.log(`new arg1: ${arg1}`);
        callback(null, 'done');
    }
], function(err, result) {
    // result now equals 'done'
    console.log(`result: ${result}`);
});
// waterfall(tasks, callback(opt)) tasks => ARRAY of FUNCTION SERIES, callback => FUNCTION
// array of functions in series, each passing their results to the next in the array
// if any of the tasks pass an error to their own callback
// the next function is not executed!!!!
// and the main callback is immediateley called with the error
