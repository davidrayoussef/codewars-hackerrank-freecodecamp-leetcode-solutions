/*
Given an n x n array, return the array elements arranged from outermost elements to the middle element,
traveling clockwise.

Example 1:
array = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
snailSort(array) => [1,2,3,6,9,8,7,4,5]

Example 2, follow the numbers of the next array sequentially:
array = [
  [1,2,3],
  [8,9,4],
  [7,6,5]
]
snailSort(array) => [1,2,3,4,5,6,7,8,9]
*/

function snailSort(array) {
  let j = 0;
  let x = 0;
  let y = 0;
  let m = array[0].length;
  let n = array.length;
  const totalLength = m * n;
  let result = [];

  while (j < totalLength) {

    if (m === 1 || n === 1) {
      result[j++] = array[y][x];
      break;
    }

    for (let i = 0; i < m - 1; i++) {
      result[j++] = array[y][x++];
    }

    for (let i = 0; i < n - 1; i++) {
      result[j++] = array[y++][x];
    }

    for (let i = 0; i < m - 1; i++) {
      result[j++] = array[y][x--];
    }

    for (let i = 0; i < n - 1; i++) {
      result[j++] = array[y--][x];
    }

    x++;
    y++;
    m -= 2;
    n -= 2;
  }

  return result;
}

snailSort([
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
]);
//=> [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
