// Question 3.4 (6th Edition)
// In the classic problem of the Towers of Hanoi, you have 3 towers and Ndisks
// of different sizes which can slide on to any tower. The puzzle starts with
// disks sorted in ascending order of size from top to bottom (i.e., each disk
// sits on top of an even larger one). You have the following constraints:

//  (1) Only one disk can be moved at a time.
//  (2) A disk is slid off the top of one tower onto the next tower.
//  (3) A disk can only be placed on top of a larger disk.

// Write a program to move the disks from the first tower to the last using
// stacks.

// Helpers ================================================================
function Stack() {
  this.stack = [];

  this.push = function(el) {
    this.stack.push(el);
  };

  this.pop = function() {
    return this.stack.pop();
  };

  this.peek = function () {
    return this.stack[this.stack.length - 1];
  };

  this.length = function() {
    return this.stack.length;
  }
}

var stackA = new Stack();
stackA.push(5);
stackA.push(4);
stackA.push(3);
stackA.push(2);
stackA.push(1);

var stackB = new Stack();
var stackC = new Stack();


// =======================================================
// Method #1 (Natalie)
function hanoi(index, targetStack, subStack, idleStack) {
  if (index === 1) {
    var el = idleStack.pop();
    return targetStack.push(el);
  }

  hanoi(index - 1, subStack, targetStack, idleStack);

  var el = idleStack.pop();
  targetStack.push(el);

  hanoi(index - 1, targetStack, idleStack, subStack);
}

console.log('before:', stackA.stack, stackB.stack, stackC.stack);
hanoi(stackA.length(), stackC, stackB, stackA);
console.log('after:', stackA.stack, stackB.stack, stackC.stack);
