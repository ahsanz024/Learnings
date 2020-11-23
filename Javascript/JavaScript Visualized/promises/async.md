https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke

### Async Await

- we can create `async` functions which **implicitly** return a promise.
  - <code>Promise.resolve('Hello');</code>
  - becomes
  - <code>async function say() => "Hello";</code>
  - **Async** functions get added to the `MicroTask Queue` upon encountering `await` keyword
    - once the CallStack is empty, they're added to the Callstack to be resolved.
    - Continues execution from where it left off.
