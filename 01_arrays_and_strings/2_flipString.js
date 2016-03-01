// Question 1.2 (5th Edition)
// Implement a function void reverse(char*str) in C or C++ which reverses a
// null-terminated string.

// =====================================================
// Method #1
function flip(str) {
  var last = str.charAt(str.length - 1);
  var temp = str.substr(0, str.length - 1);
  return temp.split('').reverse().join('') + last;
  // Note: difference between substr and substring
  // substr(0, 5) starts at index 0, forms string of 5 characters
  // substring(0, 5) starts at index 0, ends at index 5
}
console.log(flip('woohoo'));

// =====================================================
// Method #2
function flip2(str) {
  var last = str.charAt(str.length - 1);

  var resString = (function(str) {
    var oldStr, newStr = [];
    oldStr = str.split('');
    oldStr.pop();
    for (var i = oldStr.length - 1; i >= 0; i--) {
      newStr.push(oldStr[i]);
    }
    return newStr.join('');
  })(str);

  resString += last;
  return resString;
}
console.log(flip2('woohoo'));

// =====================================================
// Method #3 (adaptation on Method #1)
function flip3(str) {
  var temp = str.charAt(str.length - 1);        // start with last letter
  for (var i = 0; i < str.length - 1; i++) {
    temp = str.charAt(i) + temp;              // put char before what is in temp--then save to temp
  }
  return temp;
}
console.log(flip3('woohoo'));
