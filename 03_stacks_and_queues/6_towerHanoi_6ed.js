// Question 3.4 (6th Edition)
// In the classic problem of the Towers of Hanoi, you have 3 towers and Ndisks
// of different sizes which can slide on to any tower. The puzzle starts with
// disks sorted in ascending order of size from top to bottom (i.e., each disk
// sits on top of an even larger one). You have the following constraints:

//  (1) Only one disk can be moved at a time.
//  (2) A disk is slid off the top of one tower onto the next tower.
//  (3) A disk can only be placed on top of a larger disk.

// Write a program to move the disks from the first tower to the last using
// stacks.


var stackA = [5, 4, 3, 2, 1];
var stackB = [];
var stackC = [];

// =======================================================
// Method #1 (Natalie)
function hanoi(index, targetStack, subStack, idleStack) {
  if (index === 1) {
    var el = idleStack.pop();
    targetStack.push(el);
    // console.log(index, stackA, stackB, stackC);
    return;
  }

  hanoi(index - 1, subStack, targetStack, idleStack);

  var el = idleStack.pop();
  targetStack.push(el);
  // console.log(index, stackA, stackB, stackC);

  hanoi(index - 1, targetStack, idleStack, subStack);
}

console.log('before:', stackA, stackB, stackC);
hanoi(stackA.length, stackB, stackC, stackA);
console.log('after:', stackA, stackB, stackC);


// =======================================================
// Method #2 (Sabrina)
var a = [5, 4, 3, 2, 1];
var b = [];
var c = [];

function move(n, startTower, endTower){
  var mover = startTower.pop();
  console.log('moving piece: ' + mover);
  endTower.push(mover);
}

function hanoi2(n, startTower, endTower) {
  var midTower;
  if (startTower === a && endTower === b || startTower === b && endTower === a) {
    midTower = c;
  } else if (startTower === b && endTower === c || startTower === c && endTower === b) {
    midTower = a;
  } else if (startTower === a && endTower === c || startTower === c && endTower === a) {
    midTower = b;
  }

  if (n === 1) {
    move(1, startTower, endTower);
    return;
  }

  hanoi2(n-1, startTower, midTower);
  move(n, startTower, endTower);
  hanoi2(n-1, midTower, endTower);
}

hanoi2(5, a, c);


// =======================================================
// Method #3 (Natalie)
// This solution relies on the pattern that even-indexed discs always moves to
// the right and odd-indexed discs to the left. It stores the position in pDisc
// and modifies it whenever a disc is moved.

var sA = [5, 4, 3, 2, 1];
var sB = [];
var sC = [];

// pDisc maps and stores the positions of each disc
var pDisc = new Array(sA.length).fill(0);
// pStack stores the references to the stacks for easy access
var pStack = [sA, sB, sC];

// calculates what direction it moves next based on index being even/odd
function nextPosition(discOrder) {
  if (discOrder % 2) {
    pDisc[discOrder] -= 1;
    if (pDisc[discOrder] < 0) pDisc[discOrder] = 2;
  } else {
    pDisc[discOrder] += 1;
    if (pDisc[discOrder] > 2) pDisc[discOrder] = 0;
  }
}

// actually moves the disc, and performs recursive call if and only iff
// discOrder is not zero (i.e. not base case)
function hanoi3(discOrder) {
  if (discOrder) hanoi3(discOrder - 1);

  var el = pStack[pDisc[discOrder]].pop();
  nextPosition(discOrder);
  pStack[pDisc[discOrder]].push(el);
  // console.log(discOrder + 1, sA, sB, sC);

  if (discOrder) hanoi3(discOrder - 1);
}

console.log('before', sA, sB, sC);
hanoi3(sA.length - 1);
console.log('after', sA, sB, sC);
