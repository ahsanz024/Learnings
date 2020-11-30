// Functions can invoked before their body declaration.
// Because the `function` reference (name -> body) is
// added in the *setup* phase
sum();
function sum() {
  const a = 3;
  let b = 4;
  var c = 5;
  console.log('a x b x c ' + a * b * c);
}

// However `var` referenced before its declaration will result in `undefined`
// which is not an ERROR, but could lead to errors,
// because `undefined` is an actual value in JS.
// probably not the value we wanted.
console.log(city);
var city = 'NY';

// LET & CONST
// `ReferenceError`
// Accessing let/const before init will throw a Reference error
//
// console.log(name);
// console.log(age);

let name = 'name';
const age = 'age';

// When the script is executed, the actual values get assigned
// city -> `undefined` -> `NY`
// name -> `uninitialized` -> `name`
// age -> `uninitialized` -> `age`
