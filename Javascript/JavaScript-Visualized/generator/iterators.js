function* emojis() {
  yield '🙏';
  yield '🕵️‍♂️';
  yield '🐊';
  yield '🙊';
  yield '☕️';
}
// It can be used to generate arrays
const emojiObj = emojis();
console.log([...emojiObj]);
// [ '🙏', '🕵️‍♂️', '🐊', '🙊', '☕️' ]
console.log([...emojiObj]);
// output: []
// We can only iterate a generator object once
// If i try to print again (from the same obj) it'll print an empty array

const emojiObj2 = emojis();
for (let emoji of emojiObj2) {
  console.log(emoji);
}
// 🙏
// 🕵️‍♂️
// 🐊
// 🙊
// ☕️

// What makes an iterator iterator?
// They implement `iterator` protocol
const array = ['1', 'c'];
console.log(array[Symbol.iterator]);
// ƒ [Symbol.iterator]() { [native code] }

const string = 'test string';
console.log(string[Symbol.iterator]);
// ƒ [Symbol.iterator]() { [native code] }

const generatorFunc = emojis();
console.log(generatorFunc[Symbol.iterator]);
// ƒ [Symbol.iterator]() { [native code] }

// NOT iterator
const regular = function () {};
regular[Symbol.iterator];
// undefined

let obj = {};
obj['prop1'] = 123;
obj['prop2'] = 'hell';
console.log(obj[Symbol.iterator]);
// undefined

// Convert an object to iteratable
obj[Symbol.iterator] = function* () {
  // just want keys
  yield Object.keys(this);
};
for (const item of obj) {
  console.log(item);
}
// [ 'prop1', 'prop2' ]

console.log([...obj]);
// output: [ [ 'prop1', 'prop2' ] ]
// Spreading shows a nested array

// In order to get a normal array
// we can use `yield*`

obj[Symbol.iterator] = function* () {
  // just want keys
  yield* Object.keys(this);
};
console.log([...obj]);
['prop1', 'prop2'];

// Observers
function* genInput() {
  const second = yield '1st';
  console.log(second);
  return 'DONE';
}
const genInputObj = genInput();
console.log(genInputObj.next('trying'));
// { value: '1st', done: false }
console.log(genInputObj.next('Input added'));
// console.log(second); -> "Input added"
// { value: 'DONE', done: true }
// calling the 1st yield, JS returns the object as usual
// 1st yiedl -> {value: "1st", done: false}
// but it leaves the execution (cursor) at the line
// const second = [VALUE PASSED IN NEXT]
// which is why the 2nd next prints `Input added`

// Lazy-evaluators / Stream generator
function* lazyFunc() {
  let num = 0;
  let retCond;
  while (!retCond) {
    num++;
    console.log(num);
    retCond = yield Math.random();
    console.log(retCond);
  }
  return;
}
// lazyFuncObj = lazyFunc();
// console.log(lazyFuncObj.next());
// // { value: 0.017487804862752476, done: false }
// console.log(lazyFuncObj.next());
// // { value: 0.5252540144420597, done: false }
// console.log(lazyFuncObj.next());
// // { value: 0.7390097673685998, done: false }
// console.log(lazyFuncObj.next(true));
// { value: undefined, done: true }
// Breaks the stream/condition

// We can take this a step further
// Make a search/condition that'll break automaticlly on some condition
// for e.g. if the rand value is greater than 0.8
function* randGenerator() {
  let num = 0;
  while (true) {
    num++;
    console.log(num);
    yield Math.random();
    // console.log(retCond);
  }
  return;
}

function findGrThan8() {
  const obj = randGenerator();
  let ret = obj.next();
  while (!ret.done) {
    console.log(ret);
    if (ret.value > 0.9) {
      return ret.value;
    } else {
      ret = obj.next();
    }
  }
}
console.log(findGrThan8());
// In this the gen func never really sets to `done=true`
// but we break out of it outside of it
