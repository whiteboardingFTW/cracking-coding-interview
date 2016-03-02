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


// ========================
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
