// async function
// const sayHello = async () => 'Hello';
// console.log(sayHello);
// // [AsyncFunction: sayHello]
// console.log(sayHello());
// // Promise { 'Hello' }

// // We can use it the old-fashioned(then) way
// // sayHello().then((resolve) => console.log(resolve));
// // Hello

// // async/await sytle
// async function testAsync() {
//   let output = await sayHello();
//   // `await` funcs are added to the `MircoTask Queue`
//   // similar to the Promise callbacks
//   console.log(output);
//   // Hello
// }

// console.log('First');
// testAsync();
// console.log('Last');
// // First -> Task
// // Last -> Task
// // Hello -> MicroTask

// async function delayedPromise() {
//   const resp = await fetch('https://api.github.com/users/jameshibbard');
//   // gets added to MicroTask
//   const json = await resp.json();
//   return json.public_repos;
// }

// async function testAsync2() {
//   console.log('testAsync2');
//   let output = await delayedPromise();
//   // gets added to Microtask
//   console.log(output);
//   output = await sayHello();
//   console.log(output);
//   // `await` funcs are added to the `MircoTask Queue`
//   // similar to the Promise callbacks
//   // Hello
// }
// console.log('First');
// testAsync2();
// setTimeout(() => {
//   console.log('Timeout');
// }, 0);
// console.log('Last');

// Add a delay using Promises + Async/Await + setTimeout
async function testAsyncPromise() {
  let num = 0;
  while (num < 3) {
    // create a new Promise
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log('Execute ' + num);
        resolve();
        // call resolve to `resolve` the promise (to break out)
      }, 1000)
    );
    num++;
  }

  console.log(num);
}
async function testAsyncWithoutPromise() {
  let num = 0;
  while (num < 3) {
    // create a new Promise
    setTimeout(() => {
      console.log('Execute ' + num);
      // call resolve to `resolve` the promise (to break out)
    }, 1000);
    num++;
  }

  console.log(num);
}

testAsyncPromise();
testAsyncWithoutPromise();
// With await:
// - Context is blocked until Timer calls `resolve`
// - after which the await is unfrozen
// - we can move to the next line (i.e. `num++`)

// Without Promise/await
// - We'll reach the `setTimeout` line
// - add it to the Qeue (macro)
// - move to the next line (without waiting) in the loop (i.e. num++)
// - once the loop finishes
// - CallStack empties and pushes items from the Queue (3x setTimouts)
// - which reads the updated value of `num` (i.e. 3 in our case)
