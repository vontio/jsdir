var jsdir = require('./jsdir.js')

var myObject = function(){};
myObject.prototype.Method1 = function(){};
console.log(jsdir(myObject));
console.log(jsdir('str'));
console.log(jsdir(123));
console.log(jsdir(/abc/));
console.log(jsdir(new Date()));
console.log(jsdir([]));
console.log(jsdir({}));
console.log(jsdir(false));
