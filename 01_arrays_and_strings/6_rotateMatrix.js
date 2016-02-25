// Question 1.6 (5th Edition)
// Question 1.7 (6th Edition)
// Given an image represented by an NxN matrix, where each pixel in the
// image is 4 bytes, write a method to rotate the image by 90 degrees. Can
// you do this in place?

'use strict';
// Method #1
function rotateMatrix(arr) {
  console.log(arr);
  var newMatrix = [];
  var len = arr.length;
  for(let r = 0; r < len; r++) {
    var newRow = [];
    for (let i = 0; i < len; i++) {
      // push to rotate clockwise
      // unshift to rotate counter-clockwise
      newRow.unshift(arr[i][len-1-r]);
    }
    newMatrix.unshift(newRow);
  }
  return newMatrix;
}
console.log(rotateMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));



// Method #2 (Book Solution)
function rotate(arr) {
  console.log(arr)
  var int = arr.length;
  for (var i = 0; i < Math.floor(int/2); i++) {
    var first = i;
    var last = int - 1 - i;
      for (var j = first; j < last; j++) {
        var offset = j - first;
        var top = arr[first][j];
        arr[first][j] = arr[last - offset][first];
        arr[last - offset][first] = arr[last][last - offset];
        arr[last][last - offset] = arr[j][last];
        arr[j][last] = top;
      }
  }
  return arr;
}

console.log(rotate([[1,1,1,1,1],[2,2,2,2,2],[3,3,3,3,3],[4,4,4,4,4],[5,5,5,5,5]]));
