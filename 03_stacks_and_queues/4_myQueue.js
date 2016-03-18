// Question 3.4 (6th Edition)
// Implement a MyQueue class which implements a queue using two stacks.

// Assume this stack implementation
function Stack () {
  this.array = [];
  Stack.prototype.push = this.array.push.bind(this.array);
  Stack.prototype.pop = this.array.pop.bind(this.array);
}

// =======================================================
// Method #1 (Chris)
function MyQueue () {
  this.queue = new Stack();

  MyQueue.prototype.enqueue = function(ele) {
    this.queue.array.push(ele);
  }

  MyQueue.prototype.dequeue = function() {
    var temp = new Stack();
    while(this.queue.array.length > 0) temp.push(this.queue.array.pop());
    var x = temp.array.pop();
    while(temp.array.length > 0) this.queue.array.push(temp.array.pop());
    return x;
  }

}

// Test MyQueue
var test = new MyQueue();
test.enqueue(1);
test.enqueue(2);
test.enqueue(3);
console.log(test.queue);
test.dequeue();
console.log(test.queue);
test.enqueue(4);
test.dequeue();
console.log(test.queue);
