// 4.4 (5th Edition)
// Given a binary tree, design an algorithm which creates a linked list of all
// the nodes at each depth (e.g., if you have a tree with depth D, you'll have
// D linked lists).


// Helpers ===============================================================
function printLinkedList(head) {
  var temp = '';
  if (!head) return console.log(head);
  var curr = head;
  while(curr.next) {
    temp += curr.val + ' -> ';
    curr = curr.next;
  }
  temp += curr.val;
  console.log(temp);
}

// Binary tree node constructor
function BTNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// Linked list node constructor
function LLNode(val) {
  this.val = val;
  this.next = null;
}


// =========================================================================
// Method #1
function treeLevelList(root) {
  var parentArr = [root];
  var childArr = [];
  var listPointers = [];
  while (parentArr.length) {
    // create linked lists for current layer
    var layerList = arrayToLL(parentArr.map((el) => el.val));
    listPointers.push(layerList);

    // keep count of children of current layer
    for (var i = 0; i < parentArr.length; i++) {
      if (parentArr[i].left) childArr.push(parentArr[i].left);
      if (parentArr[i].right) childArr.push(parentArr[i].right);
    }
    parentArr = childArr;
    childArr = [];
  }
  return listPointers;
}

// Converts an array of values to a singly linked list
function arrayToLL(arr) {
  if (!arr.length) return null;
  var nextNode = new LLNode(arr[arr.length - 1]);
  for (var i = arr.length - 2; i >= 0; i--) {
    var currNode = new LLNode(arr[i]);
    currNode.next = nextNode;
    nextNode = currNode;
  }
  return nextNode;
}

/*
The binary tree:
      4
     / \
    2   6
   / \   \
  1   3   7
should give 3 linked lists:
  4
  2 -> 6
  1 -> 3 -> 7
*/

// construct the tree depicted above
var leftNode = new BTNode(2);
leftNode.left = new BTNode(1);
leftNode.right = new BTNode(3);

var rightNode = new BTNode(6);
rightNode.right = new BTNode(7);

var rootNode = new BTNode(4);
rootNode.left = leftNode;
rootNode.right = rightNode;

// testing treeLevelList()
console.log(rootNode);
var resultLists = treeLevelList(rootNode);
resultLists.forEach(printLinkedList);
