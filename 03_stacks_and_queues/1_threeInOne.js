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
