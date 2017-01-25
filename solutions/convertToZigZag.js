/*
Convert a string, e.g. 'PAYPALISHIRING', to a zigzag pattern on a given number of rows, e.g. 3, like this:

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line. convertToZigZag("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/

function convertToZigZag(s, numRows) {
  if (numRows < 2 || s.length <= numRows) return s;

  const arr = [...s];
  let chunks = [];
  let result = '';
  let col = 0;

  while (arr.length) {
    if (col % 2 === 0) {
      chunks.push( arr.splice(0, numRows) );
      col++;
    }
    else {
      let newChunk = [' '].concat( arr.splice(0, numRows - 2) );
      while (newChunk.length < numRows) {
        newChunk = newChunk.concat(' ');
      }
      chunks.push( newChunk.reverse() );
      col++;
    }
  }

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < chunks.length; j++) {
      result += chunks[j][i] === undefined ? ' ' : chunks[j][i];
    }
  }

  return [...result].filter(v => v !== ' ').join('');
};

convertToZigZag("PAYPALISHIRING", 5); //=> "PHASIYIRPLIGAN"
