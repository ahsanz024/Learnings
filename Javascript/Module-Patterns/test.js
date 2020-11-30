// Require Named Module
const { test2, test1 } = require('./named.js');
console.log(test2());
test1();

const anything = require('./anonymous');
console.log(anything);
// anything();
