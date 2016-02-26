// Question 2.1
// Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?

// Method #1 (Aaron, Maria, Chris)
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
  }

var current = removeDuplicates(head);
while(current) {
  console.log(current.val);
  current = current.next;
}
