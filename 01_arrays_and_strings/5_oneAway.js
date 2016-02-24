function isOneAway (string1, string2) {

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

  //Check for different characters
  for (var i = 0; i < long.length; i++) {
    if(long[i] !== short[i]) count += 1;
  };
  if (count > diff) return false;
  return true;

  //Check for insertion or deletion
  if(Math.abs(long.length - short.length) === 1){
    var flag = 0;
    var v = 0;
    for ( var i = 0; i < short.length; i++) {
      if (short[i] !== long[i + v]){
        //Insertion
        if (short[i] === long[i + v + 1]){
          v = 1;
          flag ++;
        }
        //Deletion
        else {
          v = -1;
          flag ++;
        }
      }
    }
  }
};

//Test for A-A-Ron
console.log(isOneAway('regex' , 'regexepleslkjfasldkjfasdfsd'));
console.log('Should be false');
console.log(isOneAway('bear' , 'b'));
console.log('Should be false');

//Test for De-Nice
console.log( isOneAway('bear' , 'pear') );
console.log('Should be true');
console.log(isOneAway('bear' , 'bea'));
console.log('Should be true');

//Written by Josh

//NOTE: Longest string is being calculated in case the questions asks us to calculate
// differences larger than 1 (like 10). This is needed to prevent a length
//difference and a character difference from being counted twice.












//Altered to calculate all changes past 1
