import async from 'async'
// parallel(tasks, callback(optional))
// 'tasks' collection of functions in parallel
// 'tasks => Array, Iterable, AsyncIterable, Object
// without waiting until the previous function has completed
// If any of the functions pass an error to its callback, the main callback is immediately called with the vaue of error
//parallel is about kicking-off I/O tasks in parallel, not about parallel execution of code.
// Javascript remains single-threaded.
// use 'reflect' to continue the execution of other tasks when a task fails
async.parallel([
    function(callback) {
        setTimeout(function() {
            callback(null, 'one');
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 'two');
        }, 100)
    }
], function(err, results) {
    //console.log(results);
    // result is equal to [ 'one', 'two' ] even though
    // the second function had a shorter timeout
});

// an example using an object instead of an array
async.parallel({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback) {
        setTimeout(function() {
            callback(null, 2)
        }, 100);
    }
}, function(err, results) {
    //console.log(results);
    // result is equal to { two: 2, one: 1 }
});

// Using Promise
async.parallel([
    function(callback) {
        setTimeout(function() {
            callback(null, 'one');
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 'two');
        }, 100);
    }
]).then(results => {
    //console.log(results);
    // results is equal to [ 'one', 'two' ] even though
    // the second function had a shorter timeout
}).catch(err => {
    console.log(err);
});

// an example using an object instead of an array
// with using Promise
async.parallel({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function() {
            callback(null, 2);
        }, 100)
    }
}).then(results => {
    //console.log(results);
    // result is equal to { two: 2, one: 1 }
}).catch(err => {
    console.log(err);
});

// Using async/await
(async () => {
    try {
        let results = await async.parallel([
            function(callback) {
                setTimeout(function() {
                    callback(null, 'one');
                }, 200);
            },
            function(callback) {
                setTimeout(function() {
                    callback(null, 'two');
                }, 100);
            }
        ]);
        console.log(results);
        // result is equal to [ 'one', 'two' ] even though
        // the second function had a shorter timeout
    } catch (err) {
        console.log(err);
    }
})();


// an example using an object instead of an array
(async () =>{
    try {
        let results = await async.parallel({
            one: function(callback) {
                setTimeout(function() {
                    callback(null, 1);
                }, 200);
            },
            two: function(callback) {
                setTimeout(function() {
                    callback(null, 2);
                }, 100);
            }
        });
        //console.log(results);
        // result is equal to: { two: 2, one: 1 }
    } catch (err) {
        console.log(err);
    }
})();
