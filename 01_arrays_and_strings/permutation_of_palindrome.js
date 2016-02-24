// 1.4 (6th edition) Palindrome Permutation
// Given a string, write a function to check if it is a permutation of a palindomre. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// Example: Tact Coa -> true

'use strict';
// Natalie
function isPerPal(str) {
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


// Aaron
function permPal(str) {
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


// Jesse and Sabrina
function permPal2(str) {
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


// Chris and Maria
function permPal3(str) {
  var count = 0;
  var regex;
  for (var i = 0; i < str.length; i++) {
    regex = new RegExp(str[i], 'ig');
    if (str.match(regex).length % 2 !== 0) {
      count++;
      if (count > 1) return false;
    }
  }
  return true;
}
