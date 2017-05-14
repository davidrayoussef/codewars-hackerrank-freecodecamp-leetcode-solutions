/*
Given an integer representing the number of floors, build a tower of blocks represented as '*'.

For example, a tower of 3 floors looks like the following:

  *
 ***
*****

*/

function towerBuilder(n) {
  return Array
    .from({length: n})
    .map((_,i) => {
      const stars = '*'.repeat((i + 1) + (i));
      const space = ' '.repeat(n - (i + 1));

      return space + stars + space;
    })
    .join('\n');
}

console.log(towerBuilder(5));

//     *
//    ***
//   *****
//  *******
// *********
