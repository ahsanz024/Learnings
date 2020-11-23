function* generatorFunc() {
  console.log('init');
  yield 1;
  console.log('1st yield');
  yield 2;
  yield;
  console.log('3rd yield');
  yield;
  return 'Done';
}
console.log(generatorFunc);
// output: [GeneratorFunction: generatorFunc]

// We need to instantiate the generatorFunc
let f = generatorFunc();
console.log(f.next());
// output: init
// output: { value: 1, done: false }
console.log(f.next());
// { value: 2, done: false }
console.log(f.next());
// { value: undefined, done: false }
console.log(f.next());
// 3rd yield
// { value: undefined, done: false }
console.log(f.next());
// { value: 'Done', done: true }
console.log(f.next());
// { value: undefined, done: true }

// Calling next on f object returns an object
// with keys `value` & `done`
// `value` -> holds the value returned by `yield`
// `done` -> represents the state of the function (bool)
// We can only iterate a generator object once.
// if we keep calling `next` after `done=true` then `value=undefined`
