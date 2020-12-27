/*
The universe of the Game of Life is an infinite two-dimensional orthogonal 
grid of square cells, each of which is in one of two possible states, 
alive or dead. Every cell interacts with its eight neighbours, which are 
the cells that are horizontally, vertically, or diagonally adjacent. At 
each step in time, the following transitions occur:
-Any live cell with fewer than two live neighbours dies, as if caused by 
 under-population.
-Any live cell with two or three live neighbours lives on to the next 
 generation.
-Any live cell with more than three live neighbours dies, as if by 
 overcrowding.
-Any dead cell with exactly three live neighbours becomes a live cell, 
 as if by reproduction.

The initial pattern constitutes the seed of the system. The first 
generation is created by applying the above rules simultaneously to every 
cell in the seed—births and deaths occur simultaneously, and the discrete 
moment at which this happens is sometimes called a tick (in other words, 
each generation is a pure function of the preceding one).

Implement your own method which will take the initial state as an 
NxM array of 0s (dead cell) and 1s (living cell) and return an equally 
sized array representing the next generation. Cells outside the array 
must be considered dead. Cells that would born out of the array 
boundaries should be ignored (universe never grows beyond the initial 
NxM grid).
*/

function nextGen(matrix) {
  const getCell = (rowIndex, cellIndex) =>
    matrix[rowIndex] ? matrix[rowIndex][cellIndex] : undefined;
  return matrix.map((row, i) => {
    return row.map((cell, j) => {
      const neighbors = [
        getCell(i - 1, j - 1),
        getCell(i - 1, j),
        getCell(i - 1, j + 1),
        getCell(i, j + 1),
        getCell(i + 1, j + 1),
        getCell(i + 1, j),
        getCell(i + 1, j - 1),
        getCell(i, j - 1)
      ].filter(Boolean);
      return (cell && (neighbors.length === 2 || neighbors.length === 3)) || neighbors.length === 3
        ? 1
        : 0;
    });
  });
}

nextGen([
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
]); //=>
/*
[
  [0,0,0],
  [1,1,1],
  [0,0,0]
]
*/

nextGen([
  [1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
]); //=>
/*
[
  [0,1,0,0,0,0,0],
  [0,0,1,0,0,0,0],
  [1,1,1,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
]
*/
