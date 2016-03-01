// Question 1.3 (5th Edition)
// Question 1.2 (6th Edition)
// Given two strings, write a method to decide if one is a permutation of the other.

// =====================================================
// Method #1
function isPerm(str1, str2) {
  // Courtesy of Natalie:
  // join() is necessary because JS does not allow direct comparison of objects and arrays
  // thus, {} = {} and [] = [] both evaluate to false
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isPerm('racecar', 'acecarr'));
console.log(isPerm('blabla', 'fdjkfj'));

// =====================================================
// Method #2 (from github.com/careercup/CtCI-6th-Edition-JavaScript)
function isPerm2(s, t) {

  var sLength = s.length;
  var tLength = t.length;

  if (sLength !== tLength) {
    return false;
  }

  var s_array = Array.apply(null, Array(256)).map(Number.prototype.valueOf, 0);

  for (var i = 0; i < sLength; i++) {
    s_array[s[i].charCodeAt(0)]++;
  }

  for (var i = 0; i < tLength; i++) {
    if (--s_array[t[i].charCodeAt(0)] < 0){
      return false;
    }
  }
  return true;
}
console.log(isPerm2('racecar', 'acecarr'));
console.log(isPerm2('blabla', 'fdjkfj'));
