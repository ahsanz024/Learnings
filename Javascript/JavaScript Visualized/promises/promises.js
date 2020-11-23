// const promise = new Promise(() => {});
// console.log(promise);
// // Promise { <pending> }
// // [[PromiseState]]: "pending"
// // [[PromiseResult]]: undefined

// const promise2 = new Promise((resolve, reject) => {
//   resolve('DONE');
// });
// console.log(promise2);
// // Promise { 'DONE' }
// // [[PromiseState]]: "fulfilled"
// // [[PromiseResult]]: "DONE"

// promise2
//   .then(() => console.log('then'))
//   .catch(() => console.log('catch'))
//   .finally(() => console.log('finally'));
// //   then
// //   finally

// const errPromise = new Promise((resolve, reject) => {
//   reject('ERROR');
// });

// errPromise
//   .then(() => console.log('then'))
//   .catch(() => console.log('catch'))
//   .finally(() => console.log('finally'));
// // catch
// // finally

// // then chaining

// promise2
//   .then(() => console.log('promise2'))
//   .then(() => console.log('promise2'))
//   .then(() => console.log('promise2'));
// // promise2
// // promise2
// // ...

// // **Microtasks and (Macro)tasks**
// console.log('Event-Loop First');
// Promise.resolve('Event-Loop promise').then((r) => console.log(r));
// console.log('Event-Loop Done');
// // Event-Loop First
// Event-Loop Done
// Event-Loop promise -> executed after the Callstack is empty

setTimeout(() => console.log('Queue setTimeout'));
Promise.resolve('Queue promise')
  .then((r) => console.log(r))
  .then(() => console.log('Queue 2nd then'))
  .then(() => console.log('Queue 3rd then'));
console.log('Queue First');
console.log('Queue Done');
// Queue First -> Task
// Queue Done -> Task
// Queue promise  -> microTask
// Queue 2nd then -> microTask
// Queue 3rd then -> microTask
// Queue setTimeout -> macroTask
