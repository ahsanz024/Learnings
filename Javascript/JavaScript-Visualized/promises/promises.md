### Promises & Async/Await

- [Source](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)

#### Promises

- ES6 feature -> promises (async/await)
- Avoid `callback-hell`
  - nested callbacks
- <quote>"A promise is a placeholder for a value that can either resolve or reject at some time in the future"</quote>
- create a new promise
  - `const promise = new Promise(() => {});`
  - its object returns/constists of 2 private props
    - value
    - status
      - pending -> still not resolved
      - rejected -> something went wrong
      - fulfilled
    - Its constructor expects a function with 2 params
      - `(resolve, reject) => {}`
      - `resolve` -> is the function to call when the promise should "resolve"
      - `reject` -> is the method to be called when there's an error;
  - we can attach 3 callbacks to a promise object
    - `then()` -> after resolve
    - `catch()` -> promise rejected
    - `finally()` -> alwasys gets called
  - the result of `.then` is also a _promise_
    - which means we can chain as many `then` as we want.
- **Microtasks and (Macro)tasks / Event Loop**
  - Promises get executed via the **Event-Loop**
    - see example
  - in the EventLoop there are _2 kinds of task queues_
    - **(macro)Task queue** (or just Task Queue)
      - most common exampls
        - `setTimeout` | `setInterval` | `setImmediate`
    - **micro task queue**
      - most common
        - `process.nextTick` | `Promise callback` | `queueMicrotask`
      - `then(), catch() or finally()`
        - are all part of micro tasks
        - they're added to the microtask queue
        - when Callstack is empty,
    - 2 key differences between _Queue_ & _Microtask Queue_
      - Event Loop adds tasks from queue after the Callstack is empty.
        - But new "Tasks" added in the Queue are handled in the next Event Loop cycle.
      - Microtasks queue is handled multiple times in the same Event-loop cycle.
        - Microtasks can add more microtasks (`then` chain), and the EL would handle them in the same cycle, before executing other tasks.
          - _Problem:_ The JS-engine could get stuck in an endless loop.
      - **Microtask queue has a higher priority** over Macro queue
      - see example
