// Question 1.6 (6th Edition)

function permPal(string) {
  var count = 0;
  var odd = '';
  string = string.replace(/ /g,'');

  for (var i = 0; i < string.length; i++) {
    var regex = new RegExp(string[i], 'ig');

    if((string.match(regex).length) %2 !== 0) {
      if(odd !== string[i]){
        odd = string[i];
        count++;
      }
      if(count > 1) return false;
    }
  }
  return true;
}
console.log(permPal('racecar'));
console.log(permPal('a man aplana canal panama'));
console.log(permPal('blafdfsfd'));
