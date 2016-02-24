// Question 1.6 (Sixth Edition))

​// Method #1
function palindrome(string){
  var count = 0;
  var odd = '';
​
  string = string.replace(/ /g,'');
​
  for (var i = 0; i < string.length; i++){
    var regex = new RegExp(string[i], 'ig');
​
    if( (string.match(regex).length) % 2 !== 0){
      if(odd !== string[i]){
        odd = string[i];
        count++;
      }
      if(count > 1){
        console.log('false');
        return false;
      }
    }
  }
  console.log('true');
  return true;
}
palindrome('a man aplana canal panama');
