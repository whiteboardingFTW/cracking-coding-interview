// Question 1.3 (5th Edition)
// Question 1.2 (6th Edition)
// Given two strings, write a method to decide if one is a permutation of the other.

// Method #1
function isPerm(str1, str2) {
  // Courtesy of Natalie:
  // join() is necessary because JS does not allow direct comparison of objects and arrays
  // thus, {} = {} and [] = [] both evaluate to false
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isPerm('racecar', 'acecarr'));
console.log(isPerm('blabla', 'fdjkfj'));
