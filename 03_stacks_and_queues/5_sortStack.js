// Question 3.6 (5th Edition)*
// Question 3.5 (6th Edition)
// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure (such as an array). The stack supports the
// following operations: push, pop, peek, and isEmpty.

// * 5th Edition asks to sort so that largest items are on top.

// =======================================================
// Method #1 (Chris, Maria)
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

function sortStackDescending (inputStack) {
  var s1 = inputStack;
  var s2 = new Stack();
  var swapped = true;

  while(swapped) {

    swapped = false;
    var x = s1.pop();

    while(s1.stack.length > 0) {
      if(x <= s1.peek()) {
        s2.push(x);
        x = s1.pop();
      } else {
        s2.push(s1.pop());
        swapped = true;
      }
      if (s1.stack.length === 0) s2.push(x);
    }

    x = s2.pop();
    swapped = false;

    while(s2.stack.length > 0) {
      if(x >= s2.peek()) {
        s1.push(x);
        x = s2.pop();
      } else {
        s1.push(s2.pop());
        swapped = true;
      }
      if (s2.stack.length === 0) s1.push(x);
    }

  }

  return s1;
}

function sortStackAscending (inputStack) {
  var s1 = inputStack;
  var s2 = new Stack();
  var swapped = true;

  while(swapped) {

    swapped = false;
    var x = s1.pop();

    while(s1.stack.length > 0) {
      if(x >= s1.peek()) {
        s2.push(x);
        x = s1.pop();
      } else {
        s2.push(s1.pop());
        swapped = true;
      }
      if (s1.stack.length === 0) s2.push(x);
    }

    x = s2.pop();
    swapped = false;

    while(s2.stack.length > 0) {
      if(x <= s2.peek()) {
        s1.push(x);
        x = s2.pop();
      } else {
        s1.push(s2.pop());
        swapped = true;
      }
      if (s2.stack.length === 0) s1.push(x);
    }

  }

  return s1;
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
console.log(test);  // -> [2, 5, 1, 3, 9, 3, 1, 3, 9, 3]
console.log(sortStackDescending(test)); // -> [9, 9, 5, 3, 3, 3, 3, 2, 1, 1]
console.log(sortStackAscending(test)); // -> [1, 1, 2, 3, 3, 3, 3, 5, 9, 9]
