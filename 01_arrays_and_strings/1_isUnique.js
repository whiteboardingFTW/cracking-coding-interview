// Question 1.1 (5th Edition)
// Question 1.1 (6th Edition)
// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// =====================================================
// Method #1
function isUnique(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;
  }
  return true;
}
console.log(isUnique('hello'));
console.log(isUnique('abcd'));

// =====================================================
// Method #2
function isUnique2(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== i) return false;
  }
  return true;
}
console.log(isUnique2('hello'));
console.log(isUnique2('abcd'));

// =====================================================
// Method #3 - Using objects
function isUniqueUsingObjects(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    // another possibility:
    // if(obj.hasOwnProperty(str[i])) return false;
    if (obj[str[i]]) return false;
    obj[str[i]] = 'exists';
  }
  return true;
}
console.log(isUniqueUsingObjects('hello'));
console.log(isUniqueUsingObjects('abcd'));

// =====================================================
// Method #4 - Without using additional data structures
function isUniquePrimitive(str) {
  var strLength = str.length;
  for (var i = 0; i < strLength - 1; i++) {
    for (var j = strLength - 1; j > i; j--) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}
console.log(isUniquePrimitive('hello'));
console.log(isUniquePrimitive('abcd'));

// =====================================================
// Method #5 - from github.com/careercup/CtCI-6th-Edition-JavaScript
function isUnique3(str) {
  var char_set = Array.apply(null, Array(256)).map(Boolean.prototype.valueOf, false);
  for (var i = 0; i < str.length; i++) {
    if (char_set[str[i].charCodeAt(0)]) {
      return false;
    }
    char_set[str[i].charCodeAt(0)] = true;
  }
  return true;
}
console.log(isUnique3('hello'));
console.log(isUnique3('abcd'));
