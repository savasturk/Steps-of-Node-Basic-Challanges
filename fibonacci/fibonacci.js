// Helped from NuckChorris/express-fibonacci repo on github!
//  Thanks!!!

//module.exports = function (number) {
  /*function fibonacci(num, finish) {
    if (num < 2) {
      finish(1);
    } else {
      process.nextTick(function() {
        fibonacci(num - 2, function(value1) {
          fibonacci(num - 1, function(value2) {
            finish(value1 + value2);
          });
        });
      });
    }
  }
  return function (req, res, next) {
    fibonacci(number, function(value) {
      req.fibonacci = value;
      next();
    });
	}*/
//}

function fibonacci(number) {
  if (number < 2) {
      return number;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
}

process.on('message', number => {
  var result = fibonacci(number);
  process.send(result);
})