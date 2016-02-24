// Question 1.3
// Given two strings, write a method to decide if one is a permutation of the other.

// Method #1
function isPerm(str1, str2) {
  // console.log(str1.split('').sort());
  // console.log(str2.split('').sort());
  return str1.split('').sort() === str2.split('').sort();
};
console.log(isPerm('racecar', 'acecarr'));
