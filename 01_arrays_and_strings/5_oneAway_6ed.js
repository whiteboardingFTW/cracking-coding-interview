// Question 1.5 (6th Edition)
// There are three types of edits can be performed on strings: insert a
// character, remove a character, or replace a character. Given two strings,
// write a function to check if they are one edit (or zero edits) away.
// Examples:
//   pale, ple   -> true
//   pales, pale -> true
//   pale, bale  -> true
//   pale, bake  -> false

// =====================================================
// Method #1 - Josh
function isOneAway(string1, string2) {

  var count = 0;
  var long, short;
  var diff = 1;

  if (string1.length > string2.length) {
    long = string1;
    short = string2;
  } else {
    long = string2;
    short = string1;
  }

  // Check for different characters
  for (var i = 0; i < long.length; i++) {
    if (long[i] !== short[i]) count += 1;
  }
  if (count > diff) return false;
  return true;

  // Check for insertion or deletion
  if (Math.abs(long.length - short.length) === 1) {
    var flag = 0;
    var v = 0;
    for (var i = 0; i < short.length; i++) {
      if (short[i] !== long[i + v]) {
        // Insertion
        if (short[i] === long[i + v + 1]) {
          v = 1;
          flag++;
        } else { // Deletion
          v = -1;
          flag++;
        }
      }
    }
  }
}

// Test for A-A-Ron
console.log(isOneAway('regex', 'regexepleslkjfasldkjfasdfsd'));
console.log('Should be false');
console.log(isOneAway('bear', 'b'));
console.log('Should be false');

// Test for De-Nice
console.log(isOneAway('bear', 'pear'));
console.log('Should be true');
console.log(isOneAway('bear', 'bea'));
console.log('Should be true');

// NOTE: Longest string is being calculated in case the questions asks us to calculate
// differences larger than 1 (like 10). This is needed to prevent a length
// difference and a character difference from being counted twice.

// =====================================================
// Method #2 - Natalie, drunk Tyler, and practically everyone in the room
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
