https://dev.to/lydiahallie/javascript-visualized-the-javascript-engine-4cdf

## JS Engine

### Tokens

- Byte Stream data gets converted from bytes to tokens
  - e.g. 0066 -> `f`
    - bunch of bytes would make tokens `function` keyword, which tells the parser that its a system reserved keyword for a function declaration.
  - **tokens** are generated from the byte-stream, which are then sent to the parser.
    - e.g.
      - `let`,
      - `variableName`,
      - `function`

### Parsers/Pre-parser

- Engine has 2 parsers
  - **Parser** and **Pre-parser**
  - **pre-parser**
    - handles code that isn't needed right away.
    - it pre-parses the code that would needed after the initial render.
      - e.g. buttonClickListener
  - ## **parser**

### Abstract Syntax Tree (AST)

- It is a syntax tree created from the code in a TREE form.
- We convert code to a known (defined) structure, which can be converted to _Machine Code_.
- https://codemacaw.com/2019/10/16/understanding-ast-with-js/
- https://medium.com/allenhwkim/how-to-parse-javascript-from-source-ffbc47b1183b

### Interpreter

- It walks through the AST and generates **byte code**
- AST is deleted once byte code is generated from it.
- clearing up space
- **Optimising Compiler**
  - takes the bytecode and outputs an optimised version of the machine/byte code.
