/*
Write a rotate function that rotates a two-dimensional array (a matrix) either clockwise or counter-clockwise
by 90 degrees, and returns the rotated array.

The function accepts two parameters: an array, and a string specifying the direction or rotation. The direction
will be either "clockwise" or "counter-clockwise".
*/

function rotateArray(matrix, direction) {
  let result = Array.from({length: matrix[0].length}).map(() => []);

  const clockWise = (arr) => {
    for (let y = 0; y < arr[0].length; y++) {
      for (let x = arr.length - 1; x >= 0; x--) {
        result[y].push(arr[x][y]);
      }
    }

    return result;
  };

  const counterClockWise = (arr) => {
    return clockWise(arr).map(v => v.reverse()).reverse();
  };

  return direction === 'clockwise' ? clockWise(matrix) : counterClockWise(matrix);
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

rotateArray(matrix, 'clockwise');
/*
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
*/

rotateArray(matrix, 'counter-clockwise');
/*
[
  [3,6,9],
  [2,5,8],
  [1,4,7]
]
*/
