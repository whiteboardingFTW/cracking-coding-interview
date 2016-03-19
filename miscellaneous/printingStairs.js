// Write a function that console logs a reversed stairs with a given number
// of levels with appropriate leading spaces. For example, a stair of 5 levels
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
