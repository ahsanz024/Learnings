// async function
const sayHello = async () => 'Hello';
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

async function delayedPromise() {
  const resp = await fetch('https://api.github.com/users/jameshibbard');
  // gets added to MicroTask
  const json = await resp.json();
  return json.public_repos;
}

async function testAsync2() {
  console.log('testAsync2');
  let output = await delayedPromise();
  // gets added to Microtask
  console.log(output);
  output = await sayHello();
  console.log(output);
  // `await` funcs are added to the `MircoTask Queue`
  // similar to the Promise callbacks
  // Hello
}
console.log('First');
testAsync2();
setTimeout(() => {
  console.log('Timeout');
}, 0);
console.log('Last');
