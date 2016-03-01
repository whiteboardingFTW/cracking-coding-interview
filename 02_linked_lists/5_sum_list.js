// Question 2.4 (5th Edition)
// Question 2.5 (6th Edition) Sum Lists
// You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

// Example:
//   Input:  (7 -> 1 -> 6) + (5 -> 9 -> 2), i.e. 617 + 295
//   Output: 2 -> 1 -> 9, i.e. 912

// Follow up: Suppose the digits are stored in forward order. Repeat the above problem.
//   Input:  (6 -> 1 -> 7) + (2 -> 9 -> 5), i.e. 617 + 295
//   Output: 9 -> 1 -> 2, i.e. 912


// Helpers =============================================
var m = { value: '4', next: { value: '5', next: { value: '6', next: { value: '1', next: null } } } };
var n = { value: '7', next: { value: '8', next: { value: '9', next: null } } };
console.log('1654 + 987 =', 1654 + 987);

function printLinkedList(head) {
  var curr = head;
  while(curr.next) {
    console.log(curr.value);
    curr = curr.next;
  }
  console.log(curr.value);
}

// =====================================================
// Method #1 (Sabrina)
function sumList(head1, head2) {
  var val1 = [];
  var val2 = [];
  while (head1) {
    val1.unshift(head1.value);
    head1 = head1.next;
  }

  while (head2) {
    val2.unshift(head2.value);
    head2 = head2.next;
  }

  var num1 = parseInt(val1.join(''));
  var num2 = parseInt(val2.join(''));
  var total = num1 + num2;
  var totalArr = total.toString().split('');
  var finishedHead = {
    value: totalArr[totalArr.length - 1],
    next: null
  }

  var curr = finishedHead;
  for (var i = totalArr.length - 2; i >= 0; i--) {
    curr.next = {
      value: totalArr[i]
    }
    curr = curr.next;
  }
  curr.next = null;

  return finishedHead;
}

printLinkedList(sumList(m,n));

// =====================================================
// Method #2 (Aaron)
function sumList2(n1, n2) {
  var curr = n1;
  var t1 = 0;
  var power = 1;
  while (curr) {
    t1 += curr.value * power;
    power *= 10;
    curr = curr.next;
  }

  curr = n2;
  power = 1;
  var t2 = 0;
  while (curr) {
    t2 += curr.value * power;
    power *= 10;
    curr = curr.next;
  }

  var total = (t1 + t2).toString();
  var retList = { value: 0, next: null };
  curr = retList;
  for (var i = total.length - 1; i > -1; i--) {
    curr.value = parseInt(total.charAt(i));
    if (i > 0) {
      curr.next = { value: 0, next: null };
      curr = curr.next;
    }
  }
  return retList;
}

printLinkedList(sumList2(m,n));
