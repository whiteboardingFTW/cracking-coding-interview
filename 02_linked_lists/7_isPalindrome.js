// Question 2.7 (5th Edition)
// Question 2.6 (6th Edition)
// Implement a function to check if a linked list is a palindrome.

// Helpers =============================================
var m = { value: 'h', next: { value: 'a', next: { value: 'n', next: { value: 'n', next: { value: 'a', next: { value: 'h', next: null } } } } } };
var n = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
var p = { value: 'r', next: { value: 'a', next: { value: 'c', next: { value: 'e', next: { value: 'c', next: { value: 'a', next: { value: 'r', next: null } } } } } } };

function printLinkedList(head) {
  var temp = '';
  var curr = head;
  while(curr.next) {
    temp += curr.value + '-';
    curr = curr.next;
  }
  temp += curr.value;
  console.log(temp);
}

// =======================================================
// Method #1 (Sam)
function isPalindrome(head) {
  var holder = [];
  var palindrome = true;
  var curr = head;
  while (curr.next) {
    holder.push(curr.value);
    curr = curr.next;
  }
  holder.push(curr.value);

  for (var i = 0; i < Math.floor(holder.length / 2); i++) {
    if (holder[i] !== holder[holder.length - 1 - i]) {
      return false;
    }
  }
  return palindrome;
}

printLinkedList(m);
console.log(isPalindrome(m));
printLinkedList(n);
console.log(isPalindrome(n));
printLinkedList(p);
console.log(isPalindrome(p));


// =======================================================
// Method #2 (Sabrina)
function isPalindrome2(head) {
  var curr = head;
  var origin = '';
  while (curr) {
    origin += curr.value.toString().toLowerCase();
    curr = curr.next;
  }
  var second = origin.split('').reverse().join('');
  if(origin === second) return true;
  return false;
}

printLinkedList(m);
console.log(isPalindrome2(m));
printLinkedList(n);
console.log(isPalindrome2(n));
printLinkedList(p);
console.log(isPalindrome2(p));


// =======================================================
// Method #3 (assume singly linked list)
// Jim, Sam, Chris...but mostly Jim
'use strict';
function isPalindrome3(head) {
  var arr = [];
  var arr2 = [];

  while(head) {
    arr.push(head.val);
    arr2.unshift(head.val);
    head = head.next;
  }
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== arr2[i]) return false;
  }
  return true;
}

var head = {
  val: 'a',
  next: {
    val: 'b',
    next: {
      val: 'b',
      next: null
    }
  }
}

console.log(isPalindrome(head));

// =======================================================
// Method #4 (assume doubly linked list and assume no tail)
// Aaron
function isPalindrome4(head) {
  if(!head) return false; // empty linked list
  var front = head;
  var back = head.next;
  if(!back) return true;  // single letter is a palindrome

  while(back.next) {
    back = back.next;
  } // now I have a pointed to the end of the list

  // walk front and back pointers towards center of the list
  while(front !== back && front.prev !== back) {
    if(front.val !== back.val) return false;
    front = front.next;
    back = back.prev;
  }
  return true;
}

var firstNode = {
  prev: null,
  val: 'a',
  next: null
}
var secondNode = {
  prev: null,
  val: 'b',
  next: null
}
var thirdNode = {
  prev: null,
  val: 'a',
  next: null
}

firstNode.next = secondNode;
secondNode.next = thirdNode;
secondNode.prev = firstNode;
thirdNode.prev = secondNode;

console.log(isPalindrome2(firstNode));
