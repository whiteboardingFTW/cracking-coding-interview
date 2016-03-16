// Question 3.1
// Describe how you could use a single array to implement three stacks.

// Method #1 (Natalie)
var ThreeInOne = function() {
  var stack = [null];
  var pointers = [0, 0, 0];

  function updatePointers(index, increment) {
    if (index < 1) pointers[0] += increment;
    if (index < 2) pointers[1] += increment;
    pointers[2] += increment;
  }

  this.push = function(value, index) {
    stack.splice(pointers[index] + 1, 0, value);
    updatePointers(index, +1);
  };

  this.pop = function(index) {
    var value = stack.splice(pointers[index], 1)[0];
    updatePointers(index, -1);
    return value;
  }

  this.peek = function(index) {
    return stack[pointers[index]];
  };

  this.isEmpty = function(index) {
    if (index === 0) return pointers[0] === 0;
    return pointers[index] === pointers[index - 1];
  }
};

var test = new ThreeInOne();
test.push('a1', 0);
test.push('a2', 0);
test.push('a3', 0);
test.push('b1', 1);
test.push('b2', 1);
test.push('c', 2);

debugger;

// Method #2 - Does not satisfy question requirements?
var ThreeInOne2 = function() {
  var stack1 = [];
  var stack2 = [];
  var stack3 = [];

  this.push = function(val) {
    if(!val) return null;
    var pointer = ((stack1.length + stack2.length + stack3.length) / 3).toFixed(1);
    var split = pointer.toString().split('.')[1];
    if (split == 0) stack1.push(val);
    else if (split == 3) stack2.push(val);
    else if (split == 7) stack3.push(val);
  };

  this.pop = function() {
    var pointer = ((stack1.length + stack2.length + stack3.length) / 3).toFixed(1);
    var split = pointer.toString().split('.')[1];
    if (!stack1.length && !stack2.length && !stack3.length) return console.log('All stacks empty');
    else if (split == 0) stack3.pop();
    else if (split == 7) stack2.pop();
    else if (split == 3) stack1.pop();
  };

  this.display = function() {
    console.log('stack 1 ' + stack1);
    console.log('stack 2 ' + stack2);
    console.log('stack 3 ' + stack3);
  };
};

var bob = new ThreeInOne2();
bob.push('a1');
bob.display();
bob.push('a2');
bob.display();
bob.push('a3');
bob.display();
bob.push('b1');
bob.display();
bob.push('b2');
bob.display();
bob.push('c1');
bob.display();
bob.pop();
bob.display();
bob.pop();
bob.display();
bob.pop();
bob.display();
bob.pop();
bob.display();
bob.pop();
bob.display();
bob.pop();
bob.display();

var cheese = new ThreeInOne2();
cheese.pop();
cheese.push('brie');
cheese.display();
cheese.pop();
cheese.display();
cheese.pop();
