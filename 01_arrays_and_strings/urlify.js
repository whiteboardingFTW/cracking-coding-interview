// 1.4 (5th edition), 1.3 (6th edition) URLify
// Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end of the string to hold the additional characters, and that you are given the "true" length of the string.

function urlify(str) {
  return str.replace(/ /g, '%20');
}

function urlify2(str) {
  return str.split(' ').join('%20');
}
