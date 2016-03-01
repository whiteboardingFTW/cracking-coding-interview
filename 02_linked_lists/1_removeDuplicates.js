// Question 2.1 (5th Edition)
// Question 2.1 (6th Edition)
// Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?

// =====================================================
// Method #1 - (Aaron, Maria, Chris)
function removeDuplicates(head) {
  var current = head;
  var seen = [];

  while(current) {
    if(seen.indexOf(current.val) === -1) {
      seen.push(current.val);
    }
    while(current.next && seen.indexOf(current.next.val) !== -1) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  return head;
}

var head = {
  val: 'a',
  next: {
    val: 'b',
    next: {
      val: 'c',
      next: {
        val: 'd',
        next: {
          val: 'e',
          next: {
            val: 'a',
            next: {
              val: 'b',
              next: {
                val: 'c',
                next: {
                  val: 'd',
                  next: {
                    val: 'e',
                    next: null
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

var current = removeDuplicates(head);
while(current) {
  console.log(current.val);
  current = current.next;
}

// ===============================================================
// Method #2 - (Natalie)
function removeDuplicates2(head) {
  var seen = [head.value];
  var current = head;
  while (current.next) {
    while (current.next && seen.indexOf(current.next.value) > -1) {
      if (current.next.next) {
        current.next = current.next.next;
      } else {
        current.next = null;
        return head;  // end of list
      }
    }
    // next value is unseen
    seen.push(current.next.value);
    current = current.next;
  }
  return head;
}

var n1 = { value: 'a', next: null };
var n2 = { value: 'b', next: null };
var n3 = { value: 'c', next: null };
var n4 = { value: 'd', next: null };

n1.next = n2;
n2.next = n3;
n3.next = n4;

var m1 = { value: 'a', next: null };
var m2 = { value: 'a', next: null };
var m3 = { value: 'a', next: null };
var m4 = { value: 'a', next: null };
var m5 = { value: 'c', next: null };
var m6 = { value: 'c', next: null };
var m7 = { value: 'c', next: null };
var m8 = { value: 'a', next: null };

m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;
m5.next = m6;
m6.next = m7;
m7.next = m8;

console.log(removeDuplicates2(n1)); // a -> b -> c -> d
console.log(removeDuplicates2(m1)); // a -> c
