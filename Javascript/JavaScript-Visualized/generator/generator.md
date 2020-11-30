https://dev.to/lydiahallie/javascript-visualized-generators-and-iterators-e36

### Generators and Iterators

#### Generator functions

- ES6 feature
- We create a generator function by writing an asterisk \* after the function
  - `function* generatorFunc() { ... }`
- we can pause the execution inside the generator func using the `yield` keyword.
  - which is where the function execution will stop until `.next()` invoked on the function object
  - see example
- We can only iterate a generator object **once**.
- It returns an `iterator`

#### Iterators

- What makes an iterator iterator?

  - they implement the iterator protocol
    - `[Symbol.iterator]`
    - `array`/`string`/`generatorObject` are all `iterators`
      - see example
  - Dont implement iterator protocol
    - `object` / `regularFunctions` are NOT `iterators
      - see example

- We can convert an object (or anything) into an iteratable

  - all it has to do it return a `next` method - as in `generator function`.
  - example:
    - <code>object[Symbol.iterator] = function\* () {
      yield this;
      };
      // output:
      </code>
  - we can compose generator functions from other generator functions
    - and `yield` them as outputs

- Generators as **Observers** / **Lazy Evaualators**
  - As _observers_, we can create gen funcs that will wait for an input
    - passed as `genFunObj.next(input)`
    - which means the function will be paused until the input is added
      - something like reactive streams.
    - see example
  - _Lazy Evaluators_
    - we can make the func such that it waits for the `next` calling to perform some operation, until it then it is paused
      - see example of `getLargeNumber`
      - in it we're lazily generator random numbers from it, until we break the loop by passing `.next(true)`
    - other examples/use-cases
      - traversing/reading a large list
