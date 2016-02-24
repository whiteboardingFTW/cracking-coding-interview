// 1.5 (6th edition) One Away
// There are three types of edits can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
// Examples:
//   pale, ple   -> true
//   pales, pale -> true
//   pale, bale  -> true
//   pale, bake  -> false

// Natalie, drunk Tyler, and practically everyone in the room
function oneAway(str1, str2) {
  if (str1 === str2) return true;

  if (str1.length === str2.length) {
    var count = 0;
    for (var i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) count++;
      if (count > 1) return false;
    }
    return true;
  }

  if (Math.abs(str1.length - str2.length) === 1) {
    var minLength = Math.min(str1.length, str2.length);
    var shorter = (str1.length === minLength) ? str1 : str2;
    var longer = (str1.length === minLength) ? str2 : str1;
    var v = 0;

    for (var i = 0; i < minLength - 1; i++) {
      if (shorter[i] !== longer[i + v]) {
        if (v === 0 && shorter[i] === longer[i + 1]) {
          v = 1;
        } else {
          return false;
        }
      }
    }
    return true;
  }

  return false;
}

console.log(oneAway('chimcchurri', 'chimichuri')); // false
console.log(oneAway('hannah', 'hanah')); // true
console.log(oneAway('aaron', 'aaaron')); // true
console.log(oneAway('chimcchhim', 'chimccjhim')); // true
