// Write a function that console logs a reversed staircase with a given number
// of levels with appropriate leading spaces. For example, a staircase of 5 levels
// should yield:
//     #
//    ##
//   ###
//  ####
// #####

// =====================================================================
// Method #1
function stairs1(level) {
  for (var i = 1; i <= level; i++) {
    var spaces = new Array(level - i).fill(' ').join('');
    var hashes = new Array(i).fill('#').join('');
    console.log(spaces + hashes);
  }
}
stairs1(5);

// =====================================================================
// Method #2
function stairs2(n) {
  var str = ' '.repeat(n).replace(/.|$/g, function(x,i){
    return ' '.repeat(n-i) + '#'.repeat(i) + '\n';
  });
  console.log(str);
}
stairs2(5);

// =====================================================================
// Method #3
function stairs3(n) {
  for (var i = 1; i <= n; i++) {
    console.log(' '.repeat(n-i) + '#'.repeat(i));
  }
}
stairs3(5);

// =====================================================================
// Method #4
function stairCase(n) {
  var staircase = '';
  var padding = 0;
  for (var i=0; i < n; i++) {
    padding = (n-1) - i;
    for (var k=0; k < padding + 2; k++) {
      if (k == padding + 1) staircase += '#';
      staircase += ' ';
    }
    for (var j=0; j < i+1; j++) {
      staircase += '#';
    }
    staircase += '\n';
  }
  return staircase;
}

stairCase(5);
