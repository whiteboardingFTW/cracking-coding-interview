// Question 3.6 (5th Edition)*
// Question 3.5 (6th Edition)
// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure (such as an array). The stack supports the
// following operations: push, pop, peek, and isEmpty.

// * 5th Edition asks to sort so that largest items are on top.

// =======================================================
// Method #1 (Chris)
function Stack () {
  this.stack = [];

  Stack.prototype.push = function(ele) {
    this.stack.push(ele);
  }
  Stack.prototype.pop = function() {
    return this.stack.pop();
  }
  Stack.prototype.peek = function () {
    return this.stack[this.stack.length - 1];
  }
}

function sortStack (inputStack) {
  var y = inputStack;
  var x = new Stack();
  var swapped = true;

  while(swapped) {
    swapped = false;
    var z = y.pop();
    while (y.stack.length > 0) {
      z <= y.peek() ? (
        x.push(z),
        z = y.pop()
      ):(
        x.push(y.pop()),
        swapped = true
      );
      if (y.stack.length === 0) x.push(z);
    }
    z = x.pop();
    swapped = false;
    while (x.stack.length > 0) {
      z >= x.peek() ? (
        y.push(z),
        z = x.pop()
      ):(
        y.push(x.pop()),
        swapped = true
      );
      if (x.stack.length === 0) y.push(z);
    }
  }
  return y;
}

var test = new Stack();
test.push(2);
test.push(5);
test.push(1);
test.push(3);
test.push(9);
test.push(3);
test.push(1);
test.push(3);
test.push(9);
test.push(3);
console.log(test);  // input stack
console.log(sortStack(test)); // output stack
