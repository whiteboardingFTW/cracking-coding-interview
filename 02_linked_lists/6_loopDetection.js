// Question 2.6 (5th Edition)
// Question 2.8 (6th Edition)
// Given a circular linked list, implement an algorithm which returns the node
// at the beginning of the loop.
// Definition:
//   Circular linked list: A (corrupt) linked list in which a node's next
// pointer points to an earlier node, so as to make a loop in the linked list.
// Example:
//   Input:  A -> B -> C -> D -> E -> C (the same C as earlier)
//   Output: C

// Helpers ===================================================
var m1 = { value: '1', next: null };
var m2 = { value: '2', next: null };
var m3 = { value: '3', next: null };
m1.next = m2;
m2.next = m3;
m3.next = m1;
var n = { value: 'a', next: { value: 'b', next: m1 } };


// ===========================================================
// Method #1 (Chris, Sabrina)
function circular(head) {
  var curr = head;
  var arr = [curr];
  while (curr) {
    if (arr.indexOf(curr.next) !== -1) return curr.next;
    arr.push(curr.next);
    curr = curr.next;
  }
}

console.log(circular(n));

// ===========================================================
// Method #2
function circular2(head) {
  var slow = head;
  var fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) break;
  }
  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
}

console.log(circular2(n));
