https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co

### Prototypal Inheritence

- Every Object in JS has prototype property
  - which has common functions that any JS object has access to e.g. `.toString()`.
- New Object Creation
  - Methods:
    - **Constructor Functions**
      - example<code>
        function Dog(name, breed)
        {
        this.name = name;
        this.breed = breed;
        }
        </code>
    - **`class` Keyword** (ES6)
      - `class` keyword is just syntatic sugar on top of the Contructor Function.
      - in the background it is just creating a new object using the **contructor function** (ES5 syntax).
    - `Object.create`
      - it'll create a new JS Object, similar to contructor function.
      - by passing an existing object (e.g. obj literal {})
- `__proto__`
  - non-enumerable (its not visible in the declared props, kind of ignored)
  - **Difference from Class based inheritence**
    - “Classes inherit from classes and create subclass relationships: hierarchical class taxonomies.”
      - [Link](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9#:~:text=%E2%80%9CClasses%20inherit%20from%20classes%20and,inherit%20directly%20from%20other%20objects.&text=In%20other%20words%2C%20class%20taxonomies,prototypal%20OO%3A%20a%20critical%20distinction.)
    - All instances of Functions/Object-literals get assigned an instance of prototype object upon function declaration (not execution).
      - see example
    - when we extend from other classes in JS, we're able to access not just the prototype of the base class, but also the prototype of the super class.
    -
