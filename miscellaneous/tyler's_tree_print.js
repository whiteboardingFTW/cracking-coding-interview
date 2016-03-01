// Every node in the mock DOM tree is structured this way:
//     { data: 'things', children: [] }
// where children is an array of similar nodes.
// Write a function to console log every data, in a pre-order, depth-first fashion, with a 2-space indent for every layer deep. (See below for examples)

// Sam, Jesse, Jim, Natalie
function treePrint(tree, spaces) {
  if (!tree.data) return;
  if (!spaces) spaces = '';
  console.log(spaces + tree.data);

  for (var i = 0; i < tree.children.length; i++) {
    treePrint(tree.children[i], spaces + '  ');
  }
}

var n1 = { data: 1, children: [
  { data: 2, children: [
    { data: 4, children: [] }
  ] },
  { data: 3, children: [] }
] };

treePrint(n1);
/* should print:
1
 2
    4
  3
*/

var m1 = { data: 1, children: [
  { data: 2, children: [
    { data: 4, children: [] },
    { data: 5, children: [
      { data: 7, children: [] }
    ] },
    { data: 6, children: [] }
  ] },
  { data: 3, children: [
    { data: 8, children: [] },
    { data: 9, children: [
      { data: 10, children: [
        { data: 11, children: [] }
      ] }
    ] }
  ] }
] };

treePrint(m1);
/* should print:
1
  2
    4
    5
      7
    6
  3
    8
    9
      10
        11
*/
