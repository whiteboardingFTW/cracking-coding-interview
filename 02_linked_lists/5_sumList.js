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

printLinkedList(sumList(m,n));  // 1 -> 4 -> 6 -> 2


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

printLinkedList(sumList2(m,n)); // 1 -> 4 -> 6 -> 2


// =====================================================
// Method #3 (Chris)
function sumList3(head1, head2) {
  var curr1 = head1;
  var curr2 = head2;
  var twoDigits = false;
  var sum = 0;
  var head = null;

  while(curr1 || curr2 || twoDigits) {
    sum = 0;
    if(twoDigits) {
      sum = 1;
      twoDigits = false;
    }
    if(curr1 && curr2) sum += curr1.val + curr2.val;
    if(curr1 && !curr2) sum += curr1.val;
    if(!curr1 && curr2) sum += curr2.val;

    if(sum > 9) {
      sum -= 10;
      twoDigits = true;
    }
    if(head) {
      curr.next = {
        val: sum,
      }
      if(curr1 || curr2) curr = curr.next;
    }
    else {
      head = {
        val: sum,
        next: null
      }
      curr = head;
    }
    if(curr1) curr1 = curr1.next;
    if(curr2) curr2 = curr2.next;

  }
  return head;
}


var head1 = { val: 7, next: { val: 1, next: { val: 6, next: null } } };
var head2 = { val: 5, next: { val: 9, next: { val: 4, next: { val: 5, next: null } } } };

var res = sumList3(head1, head2);
while(res) {
  console.log(res.val);
  res = res.next;
}
// 617 + 5495 = 6112
// 7 -> 1 -> 6
// 5 -> 9 -> 4 -> 5
// 2 -> 1 -> 1 -> 6
