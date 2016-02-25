// Question 1.4 (5th Edition)
// Question 1.3 (6th Edition)
// Write a method to replace all spaces in a string with '%20'. You may
// assume that the string has sufficient space at the end of the string
// to hold the additional characters, and that you are given the "true"
// length of the string.

// Method #1
function urlify(str) {
  return str.replace(/ /g, '%20');
}

// Method #2
function urlify2(str) {
  return str.split(' ').join('%20');
}

console.log(urlify('Mr John Smith'));
console.log(urlify2('Mr John Smith'));
