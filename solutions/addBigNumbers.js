// Given the string representations of two integers, return the string representation of
// the sum of those integers.

// Big numbers in JavaScript are represented by scientific notation, so this must be solved
// using single-digit addition

function addBigNumbers(a, b) {
  a = [...a].map(Number);
  b = [...b].map(Number);
  let columnTotal = 0;
  let carryover = 0;
  let result = '';

  while (a.length || b.length || carryover) {
    columnTotal = carryover + (a.pop() || 0) + (b.pop() || 0);
    result = columnTotal % 10 + result;
    carryover = columnTotal < 10 ? 0 : 1;
  }

  return result.replace(/^0/, '');
};

addBigNumbers('752856458734565548245482', '245665677579525565437591'); //=> "998522136314091113683073"
