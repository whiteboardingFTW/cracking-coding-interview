// Question 1.4
// Write a method to replace all spaces
// in a string with'%20'. You may assume that the string
// has sufficient space at the end of the string to hold
// the additional characters, and that you are given the
// "true" length of the string. (Note: if imple- menting
// in Java, please use a character array so that you can
// perform this opera- tion in place.)
//
// EXAMPLE
// Input: "Mr John Smith
// Output: "Mr%20John%20Smith"

// Method #1
function urlify1(str) {
  return str.replace(/ /g, '%20');
}
console.log(urlify1('Mr John Smith'));
