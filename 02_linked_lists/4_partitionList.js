// Question 2.4 (5th Edition)
// Question 2.4 (6th Edition)
// Write code to partition a linked list around a value x, such that all nodes
// less than x come before all nodes greater than or equal to x.

// Method #1 (not yet working for cases where x is in the list) - Aaron, Chris
// function partitionList(x, head) {
//   var temp = 0;
//   var swapped = true;
//   var curr;
//   if (head) curr = head;
//   while(swapped) {
//     swapped = false;
//
//     while(curr){
//       if (!curr.next) {
//         curr = head;
//         break;
//       }
//       if ((curr.val >= x && !(curr.next.val >= x)) || (!(curr.val >= x) && curr.next.val >= x)) {
//         if (curr.val > curr.next.val) {
//           temp = curr.val;
//           curr.val = curr.next.val;
//           curr.next.val = temp;
//           swapped = true;
//         }
//       }
//       curr = curr.next;
//     }
//   }
//   return head;
// }
// var head = {
//   val: 7,
//   next: {
//     val: 4,
//     next: {
//       val: 6,
//       next: {
//         val: 3,
//         next: null
//       }
//     }
//   }
// }

// Works when x is NOT in the list
// 4 -> 3 -> 7 -> 6
// var current = partitionList(5, head);
// while(current) {
//   console.log(current.val);
//   current = current.next;
// }


// Breaks when x is in the list
// var current = partitionList(6, head);
// while(current) {
//   console.log(current.val);
//   current = current.next;
// }
// DESIRED: -> 4 -> 3 -> 6 -> 7
// ACTUAL:   -> 4 -> 3 -> 7 -> 6

// Method #2
function partition(head, p) {
  var curr = head;
  var small = [];
  var big = [];
  while (curr) {
    if (curr.value < p) {
      small.push(curr.value);
      curr = curr.next;
    } else {
      big.push(curr.value);
      curr = curr.next;
    }
  }
  console.log('small' + small);
  console.log('big' + big);
  var joined = small.concat(big);
  console.log(joined);

  curr = head;
  var count = 0;
  while (curr) {
    curr.value = joined[count];
    count++;
    curr = curr.next;
  }
  return head;
}

var m1 = { value: '6', next: null };
var m2 = { value: '5', next: null };
var m3 = { value: '3', next: null };
var m4 = { value: '4', next: null };
var m5 = { value: '5', next: null };
var m6 = { value: '6', next: null };

m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;
m5.next = m6;

console.log(partition(m1, 4));
