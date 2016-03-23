// 4.3 (5th Edition)
// Given a sorted (increasing order) array with unique integer elements, write
// an algorithm to createa binary search tree with minimal height.

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// Method #1 (Chris, Kris, Natalie)
function bonsai(subArr) {
  if (subArr.length === 0) return null;

  var x = Math.floor(subArr.length / 2);
  var curr = new Node(subArr[x]);

  var left = subArr.slice(0, x);
  var right = subArr.slice(x + 1);

  curr.left = bonsai(left);
  curr.right = bonsai(right);

  return curr;
}

console.log(bonsai([1, 2, 3, 4, 5]));
console.log(bonsai([1, 2, 3]));
