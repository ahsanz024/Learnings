function TestObject(name, id) {
  this.name = name;
  this.id = id;
}
function TestObjectNew(name, id) {
  this.name = name;
  this.id = id;
}

let test1 = new TestObject('test', 123);
let test2 = new TestObject('test', 456);
console.log('test1 ' + test2.__proto__.newValue);
// output: undefined

// modifying prototype object of `TestObject`
test1.__proto__.newValue = 123;

console.log('newValue ' + test1.__proto__.newValue);
// output: 123

console.log('test2 ' + test2.__proto__.newValue);
// output: 123

let test3 = new TestObject('test', 456);
console.log('test3 ' + test2.__proto__.newValue);
// output: 123

let testnew = new TestObjectNew('test', 789);
console.log('newValue ' + testnew.__proto__.newValue);
// output: undefined
TestObjectNew.prototype.testobj = TestObject;
console.log('newValue.proto ' + testnew.__proto__.testobj.prototype.newValue);
// output: 123

// Functions/Objects get `prototype` object assigned.
// Its not a super class, rather an instance to __proto__ object.
// Which will be shared by all instances of the same Object Type.
// In our example we modified the __proto__ of `TestObject`
// which is why all objects of type `TestObject` can see the same
// value of `__proto__.newValue`

// When we create the reference in TestObjectNew's prototype to TestObject
// we were able to (via prototype-chaining) access `newValue`

// CLASSES
class Dog {
  lovesCat = false;
  constructor(name) {
    this.name = name;
  }
}

class ChildDog extends Dog {
  constructor(name) {
    super(name);
  }
}

let max = new ChildDog('max');
console.log('max lovesCat? ' + max.lovesCat);
// output: false
max.lovesCat = true;
console.log('max lovesCat? ' + max.lovesCat);
// output: true
let fluffy = new ChildDog('fluffy');
console.log('fluffy lovesCat? ' + fluffy.lovesCat);
// output: false
// still false because we're not chaning the prototype value
