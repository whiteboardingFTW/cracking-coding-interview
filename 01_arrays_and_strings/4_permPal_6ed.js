// Question 1.4 (6th Edition)
// Given a string, write a function to check if it is a permutation of a
// palindrome. A palindrome is a word or phrase that is the same forwards
// and backwards. A permutation is a rearrangement of letters. The palindrome
// does not need to be limited to just dictionary words.
// Example: Tact Coa -> true

'use strict';
// // Method #1 - Natalie
function permPal(str) {
  var counts = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    if (letter !== ' ') {
      if (counts.hasOwnProperty(letter)) {
        counts[letter] += 1;
      } else {
        counts[letter] = 1;
      }
    }
  }

  var numOdd = 0;
  for (let key in counts) {
    if (counts[key] % 2) numOdd += 1;
  }

  return numOdd < 2;
}

// // Method #2 - Aaron
function permPal2(str) {
  var letters = {};
  for (let i = 0; i < str.length; i++) {
    let cur = str.charAt(i).toLowerCase();
    letters[cur] ? letters[cur] += 1 : letters[cur] = 1;
  }

  var maxOne = 0;
  for (let myLet in letters) {
    if (typeof letters[myLet] === 'number') {
      if (letters[myLet] % 2 !== 0) {
        maxOne++;
      }
    }
    if (maxOne > 1) return false;
  }
  return true;
}

// // Method #3 - Jesse and Sabrina
function permPal3(str) {
  var obj = {};
  var count = 0;

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }

  for (let key in obj) {
    count += obj[key] % 2;
  }

  if (count <= 1) {
    return true;
  } else {
    return false;
  }
}

// // Method #4 - Chris and Maria
function permPal4(string) {
  var count = 0;
  var odd = '';
  string = string.replace(/ /g, '');

  for (var i = 0; i < string.length; i++) {
    var regex = new RegExp(string[i], 'ig');

    if ((string.match(regex).length) % 2 !== 0) {
      if (odd !== string[i]) {
        odd = string[i];
        count++;
      }
      if (count > 1) return false;
    }
  }
  return true;
}
console.log(permPal('racecar'));
console.log(permPal('a man aplana canal panama'));
console.log(permPal('blafdfsfd'));

console.log(permPal2('racecar'));
console.log(permPal2('a man aplana canal panama'));
console.log(permPal2('blafdfsfd'));

console.log(permPal3('racecar'));
console.log(permPal3('a man aplana canal panama'));
console.log(permPal3('blafdfsfd'));

console.log(permPal4('racecar'));
console.log(permPal4('a man aplana canal panama'));
console.log(permPal4('blafdfsfd'));
