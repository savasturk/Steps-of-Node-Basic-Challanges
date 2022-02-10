import async from 'async'

async.each(['foo', 'bar', 'baz'], function(el){
    setTimeout(function() {
        //console.log(el);
    }, 100);
}, function(err) {
    console(err);
});
function createUser(userName, callback) {
    callback(null);
}
var arrayOfData = ['Ritu', 'Titu', 'Pitu'];
async.each(arrayOfData, function(eachUserName, callback) {
    console.log(`Creating user: ${eachUserName}`);
    createUser(eachUserName, callback);
}, function(err) {
    if(err) {
        console.log('unable to create user');
    } else {
        console.log('All user created successfully');
    }
});