/*console.log('hi');
const bar = () => {
    //throw new DOMException();
    console.log('bar');
}

const baz = () => console.log('baz');*/

/*const foo = () => {
    console.log('foo');
    //bar();
    setTimeout(bar, 5000);
    baz();
}*/
// example of job queue
/*const foo = () => {
    console.log('foo');
    setTimeout(bar, 0);
    new Promise((resolve, reject) => 
        resolve('should be right after baz, before bar')
    ).then(resolve => console.log(resolve));
    baz(); 
}
foo();*/
/*const timeoutScheduled = Date.now();

setTimeout(() => {
    const delay = Date.now() - timeoutScheduled;
    console.log(`${delay}ms have passed since I was scheduled`);
}, 100)
*/

/*setTimeout(() => {
    console.log('timeout');
}, 0);
setImmediate(() => {
    console.log('immediate');
});*/
// this structure undeterministic sometimes return
// immediate, timeout
// sometimes return
// timeout, immediate

/*const fs = require('fs');
fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log('timeout');
    }, 0);
    setImmediate(() => {
        console.log('immediate');
    })
})
// two calls above within an I/O cycle because of it
// ALWAYS immediate callback executed first*/

/*let bar;
function someAsyncApiCall(callback){
    //callback(); // this has an asynchronous signature, but calls callback synchronously
    process.nextTick(callback); // not allow event loop continue
}
someAsyncApiCall(() => {
    console.log('bar', bar);
});
bar = 1;
// in above structure return 'bar undefined'*/

const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
    EventEmitter.call(this);
    this.emit('event'); //not work
    /*process.nextTick(() => {
        this.emit('event');
    });*/
}
util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occured!');
});
