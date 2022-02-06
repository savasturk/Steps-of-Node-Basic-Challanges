var express = require('express');
//var fibonacci = require('./fibonacci.js');
var cluster = require('cluster');
var app = express();

var PORT = process.env.PORT || 3000;
var F_NUMBER = 30000;
var NUM_CPUS = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    for (var i = 0; i < NUM_CPUS; i++) {
        cluster.fork();
    }
    /*cluster.on('online', (worker) => {
        console.log(`Worker Id is ${worker.id} and the PID is: ${worker.process.pid}`);
    });
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.procedd.pid} died`);
    });*/
} else {

    //app.use(fibonacci(F_NUMBER));
    function fibonacci(number) {
        if (number < 2) {
            return number;
        }
        return fibonacci(number - 1) + fibonacci(number - 2);
      }

    app.get('/', function (req, res) {
        //res.send('Fibonacci result for: ' + F_NUMBER + ' is: ' + fibonacci(F_NUMBER));
        //res.send(req.fibonacci);
        var result = fibonacci(F_NUMBER);
        console.log('result: ' + result);
        return res.send({data: result});
    });

    app.listen(PORT, () =>{
        console.log(`App listening on port ${PORT} ${process.pid} !`);
    }
    );
}

// This cause 'Maximum call stack size exceeded' error!


