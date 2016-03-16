// Question 3.3 (Stack of Plates)
// Imagine a (literal) stack of plates.  If the stack gets too high, it might
// topple.  Therefore, in real life, we would likely start a new stack when the
// previous stack exceeds some threshold. Implement a data structure that mimics
// this.  SetOfStacks should be composed of several stacks and should create a
// new stack once the previous one exceeds capacity.  SetOfStacks.push() and
// SetOfStacks.pop() should behave identically to a single stack (that is, pop()
// should return the same values as it would if there were just a single stack).

// FOLLOW UP
// Implement a function popAt (x) which performs a pop operation on a specific
// sub-stack.

// Method #1 (Chris)
var SetOfStacks = function(cap) {
  this.set = [[]];
  this.capacity = cap;

  this.push = function(ele) {
    var currStack = this.set[this.set.length - 1];

    if (this.set[this.set.length - 1].length < this.capacity) {
      this.set[this.set.length - 1].push(ele);
    }
    else {
      this.set.push([]);
      this.set[this.set.length - 1].push(ele);
    }
    console.log(test.set);
  };

  this.pop = function() {
    var currStack = this.set.pop();
    if (currStack) {
      var y = currStack.pop();
      if (currStack.length !== 0) this.set.push(currStack);
      console.log(test.set);
      return y;
    }
  };

  this.popAt = function(x) {
    return this.set[x - 1].pop();
  };

};

var test = new SetOfStacks(2);
test.push(1);
test.push(2);
test.push(3);
test.popAt(1);  // perform pop on the first stack
test.push(4);
test.push(5);
test.pop();
test.pop();
test.pop();
test.pop();
test.pop();
