// Add two binary numbers together

function addBinaryNumbers(a, b) {
  a = [...a];
  b = [...b];
  let carryover = 0;
  let columnTotal = 0;
  let result = '';

  while (a.length || b.length || carryover) {
    columnTotal = carryover + ~~a.pop() + ~~b.pop();
    result = columnTotal % 2 + result;
    carryover = columnTotal < 2 ? 0 : 1;
  }

  return result;
}

addBinaryNumbers('11', '1'); //=> "100"
