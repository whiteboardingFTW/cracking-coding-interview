// Question 2.7 (6th Edition)
// Given two (singly linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting).

// Helpers ===================================================
var m = { value: 'h', next: { value: 'a', next: { value: 'n', next: { value: 'n', next: { value: 'a', next: { value: 'h', next: null } } } } } };
var n = { value: 'r', next: m };
var p = { value: 'x', next: m };

function printLinkedList(head) {
  var temp = '';
  if (!head) return console.log(head);
  var curr = head;
  while(curr.next) {
    temp += curr.value + '-';
    curr = curr.next;
  }
  temp += curr.value;
  console.log(temp);
}


// ===========================================================
// Method #1 (Natalie)
function intersection(head1, head2) {
  var length1 = 0;
  var length2 = 0;
  var curr = head1;
  while (curr.next) {
    length1++;
    curr = curr.next;
  }
  length1++;

  curr = head2;
  while (curr.next) {
    length2++;
    curr = curr.next;
  }
  length2++;

  var longer = (length1 - length2 > 0) ? head1 : head2;
  var shorter = (length1 - length2 > 0) ? head2 : head1;

  for (var i = 0; i < Math.abs(length1 - length2); i++) {
    longer = longer.next;
  }

  if (Object.is(longer, shorter)) return longer;
  while (longer.next && shorter.next) {
    if (Object.is(longer.next, shorter.next)) return longer.next;
    longer = longer.next;
    shorter = shorter.next;
  }
  return null;
}

printLinkedList(intersection(p, n));  // h-a-n-n-a-h
printLinkedList(intersection(m, n));  // h-a-n-n-a-h
