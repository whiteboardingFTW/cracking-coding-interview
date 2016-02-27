// Question 2.4
// Write code to partition a linked list around a value x, such that all nodes
// less than x come before all nodes greater than or equal to x.

// Aaron, Chris
// Method #1 (not yet working for cases where x is in the list)
function partitionList(x, head) {
  var temp = 0;
  var swapped = true;
  var curr;
  if (head) curr = head;
  while(swapped) {
    swapped = false;

    while(curr){
      if (!curr.next) {
        curr = head;
        break;
      }
      if ((curr.val >= x && !(curr.next.val >= x)) || (!(curr.val >= x) && curr.next.val >= x)) {
        if (curr.val > curr.next.val) {
          temp = curr.val;
          curr.val = curr.next.val;
          curr.next.val = temp;
          swapped = true;
        }
      }
      curr = curr.next;
    }
  }
  return head;
}
var head = {
  val: 7,
  next: {
    val: 4,
    next: {
      val: 6,
      next: {
        val: 3,
        next: null
      }
    }
  }
}

// Works when x is NOT in the list
// 4 -> 3 -> 7 -> 6
// var current = partitionList(5, head);
// while(current) {
//   console.log(current.val);
//   current = current.next;
// }


// Breaks when x is in the list
var current = partitionList(6, head);
while(current) {
  console.log(current.val);
  current = current.next;
}
// DESIRED: -> 4 -> 3 -> 6 -> 7
// ACTUAL:   -> 4 -> 3 -> 7 -> 6
