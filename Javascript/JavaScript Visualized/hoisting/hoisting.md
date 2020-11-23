https://dev.to/lydiahallie/javascript-visualized-hoisting-478h

"**Hoisting**:

- is often explained as putting variables and functions to the top of the file but nah, that’s not what’s happening, although the behavior might seem like it 😃"
- Conceptually, for example, a strict definition of hoisting suggests that variable and function declarations are physically moved to the top of your code, but this is not in fact what happens. Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.

---

- When JS engine gets the script 1st thing it does is "SETUP"
  - No code is executed.
  - **_function names_** are added to memory, pointing to function body.
  - Variables
    - ES6 added 2 keywords
      - **let** & **const**
    - `let` or `const` keyword are stored _uninitialized_.
    - `var` keyword are stored with the default value of `undefined`
    -
