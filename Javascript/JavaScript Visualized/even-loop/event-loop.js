// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif
function greet() {
  return 'hello';
}

function respond() {
  return setTimeout(() => {
    console.log('TIME');
    return 'Hey';
  }, 1000);
}
// Adds the respond to callstack
// respond() -> adds the setTimeout to the CS
// Both setTimeout & respond get `popped` off the CS
// () => {return 'HEY'} -> gets added to the WebAPI
// Timer is run by the WebAPI (1000ms)
// Once the timer is over, it gets added to the QUEUE (NOT the Callstack)
// (Explained better in the post)

// EVENT LOOPS
// EL looks at the CS and the QUEUE
// CS is empty bu the Q is not
// adds the `() => {return 'HEY'}` to the CS.

// const g = greet();
// console.log('g ' + g);
// const r = respond();
// console.log('r ' + r);

// Exercise
const foo = () => console.log('First');
// foo = function (no args) return console.log
const bar = () => setTimeout(() => console.log('Second'), 0);
// bar = function (no args) return setTimeout
const baz = () => console.log('Third');
// baz = function (no args) return console

// CS = []
// Q = []
bar();
// CS = [bar] -> [bar, setTimeout] -> []
// Q = [() => console.log('Second')]
// output:
foo();
// CS = [foo] -> []
// Q = [() => console.log('First')]
// output: First
baz();
// CS = [baz] -> []
// Q = [() => console.log('Third')]
// output: Third

// EVENT LOOP
// Q = []
// CS = [() => console.log('second')] -> []
// output: second
