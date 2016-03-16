// Question 3.7 (5th Edition)
// Question 3.6 (6th Edition)
// An animal shelter, which holds only dogs and cats, operates on a strictly
// "first in, first out" basis.  People must adopt either the "oldest" (based
// on arrival time) of all animals at the shelter, or they can select whether
// they would prefer a dog or a cat (and will receive the oldest animal of that
// type).  They cannot select which specific animal they would like.  Create the
// data structures to maintain this system and implement operations such as
// enqueue, dequeueAny, dequeueDog, and dequeueCat.  You may use the built-in
// LinkedList data structure.

// =======================================================
// Method #1 (Chris)
function ListNode(item, nextNode) {
  this.val = item;
  this.next = nextNode;
}

function LinkedList (list) {
  var length = list.length;
  // this.head = length ? new ListNode(null, null) : null;
  for (var i = length - 1; i >= 0; i--) {
    this.head = new ListNode(list[i], this.head);
  }
}

function AnimalShelter (queue) {
  this.head = queue;

  this.enqueue = function(ele) {
    // console.log(ele);
    var curr = this.head;
    while(curr.next) {
      curr = curr.next;
      // console.log(curr.next);
    }
    curr.next = new ListNode(ele, null);
  }

  this.dequeueAny = function() {
    curr = this.head;
    this.head = curr.next;
    return curr.val;
  }

  this.dequeueDog = function() {
    curr = this.head;
    console.log(curr);
    if (curr.val === 'dog') {
      var x = curr.val;
      this.head = curr.next;
      return x;
    }
    while(curr.next) {
      if (curr.next.val === 'dog') {
        var x = curr.next.val;
        curr.next = curr.next.next;
        return x;
      }
    }
  }

  this.dequeueCat = function() {
    curr = this.head;
    if (curr.val === 'cat') {
      var x = curr.val;
      this.head = curr.next;
      return x;
    }
    while(curr.next) {
      if (curr.next.val === 'cat') {
        var x = curr.next.val;
        curr.next = curr.next.next;
        return x;
      }
    }
  }

}

var test = new LinkedList(['cat', 'dog', 'dog', 'cat', 'dog', 'cat', 'cat']);
var shelterQueue = new AnimalShelter(test.head);
shelterQueue.enqueue('dog');
console.log('Dequeued: ' + shelterQueue.dequeueAny());  // removes 'cat'
console.log('Dequeued: ' + shelterQueue.dequeueDog());  // removes 'dog'
console.log('Dequeued: ' + shelterQueue.dequeueCat());  // removes 'cat'

var current = shelterQueue.head;
while(current) {
  console.log(current.val);
  current = current.next;
}
// EXPECT: 'dog', 'dog', 'cat', 'cat', 'dog'
