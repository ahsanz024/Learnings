function outer() {
  const a = 1;
  return function inner() {
    const b = 2;
    return function inner2() {
      let c = b * 3;

      console.log('A B C -> ' + (a + b + c));
    };
  };
}

const inner1 = outer();
const inner2 = inner1();
inner2();
// output: A B C -> 9
outer()()();
// output: A B C -> 9

// inner2 has access to c (local Execution Contenxt)
// inner2 had access to `b` -> Outer EC (backpack)
// (backpack) EC when inner2 was being declared (not run)
// Similarly: inner had access to outer context (i.e. `outer` funcs EC)

// Block SCOPE
// const/let take the context of the nearest curly braces {}
// function/if-else/etc
