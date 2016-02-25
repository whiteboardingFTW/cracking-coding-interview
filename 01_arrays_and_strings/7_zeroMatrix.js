// Question 1.7 (5th Edition)
// Question 1.8 (6th Edition)
// Write an algorithm such that if an element in an MxN matrix is 0, its
// entire row and column are set to 0.
'use strict';

function zeroMatrix(arr) {
  console.log(arr);
  // replaces the given row and column of the array with zeros
  function zero(arr, row, col) {
    for(let i = 0; i < arr[row].length; i++) {
      arr[row][i] = 0;
    }
    for(let j = 0; j < arr.length; j++) {
      arr[j][col] = 0;
    }
  }

  var axises = [];  // stores coordinates(i.e. row and col) where zero occurs
  for(let row = 0; row < arr.length; row++) {
    for(let col = 0; col < arr[row].length; col++) {
      if(arr[row][col] === 0) {
        axises.push([row, col]);
      }
    }
  }

  // for each coordinate, call zero, which will replace the row and col with zeros
  for(let v = 0; v < axises.length; v++) {
    zero(arr, axises[v][0], axises[v][1]);
  }
  return arr;
}
console.log(zeroMatrix([[1,1,1,0],[2,2,2,2],[3,3,3,3]]));
console.log(zeroMatrix([[1,1,1,0],[2,2,2,2],[3,0,3,3]])); // test with multiple zeros
