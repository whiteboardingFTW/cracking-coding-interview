// 1.5 (5th edition)
// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string.

function letterCtr(str) {
  var count = 1;
  var res = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      res.push(str[i]);
      res.push(count);
      count = 1;
    }
  }

  var result = res.join('');
  if (result.length >= str.length) {
    return str;
  } else {
    return result;
  }
}
