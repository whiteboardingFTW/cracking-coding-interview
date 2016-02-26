// Question 2.3
// Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.
// Example:
//   Input: the node c from the linked list a -> b -> c -> d -> e
//   Result: nothing is returned, but the new linked list looks like a -> b -> d -> e

function deleteMiddleNode(pointer) {
  var current = pointer;
  while (current.next) {
    current.value = current.next.value;
    if (!current.next.next) {
      current.next = null;
      return;
    } else {
      current = current.next;
    }
  }
}

var m1 = { value: '1', next: null };
var m2 = { value: '2', next: null };
var m3 = { value: '3', next: null };
var m4 = { value: '4', next: null };

m1.next = m2;
m2.next = m3;
m3.next = m4;

console.log(m1); // 1 -> 2 -> 3 -> 4
deleteMiddleNode(m2);
console.log(m1); // 1 -> 3 -> 4
