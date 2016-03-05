// Question 3.2
// How would you design a stack which, in addition to push and pop, also has a function min which returns the minimum element? Push, pop and min should all operatein O(1) time.

// Method #1 (Sabrina)
var StackMin = function() {
  var stack = [];
  var min;

  this.push = function(el) {
    if (el < min || min === undefined) min = el;
    stack.push({
      value: el,
      min: min
    });
  };

  this.pop = function() {
    return stack.pop().value;
  };

  this.min = function() {
    if (!stack.length) return null;
    return stack[stack.length - 1].min;
  };
};

var test = new StackMin();

debugger;
