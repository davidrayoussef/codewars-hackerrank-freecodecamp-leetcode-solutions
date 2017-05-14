/*
Write a function to multiply big numbers. The numbers may be very large (so they need to be multiplied as you would
on paper, to avoid conversion to scientific notation). The arguments are passed as strings. Answer should be returned as
a string. The returned "number" should not start with zeros.
*/

function multiplyBigNumbers(a, b) {
  if (a === '0' || b === '0') return '0';

  const arr1 = a.split('');
  const arr2 = b.split('');
  let columnTotal = 0;
  let remainder = 0;
  let columnDigit;
  let addends = [];
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let k = 0;

  while (i > -1 || j > 0 || remainder) {
    if (i < 0) i = arr1.length - 1, j--, k++;

    columnTotal = (arr1[i--] * arr2[j]) + remainder;
    columnDigit = columnTotal % 10;
    remainder = columnTotal > 9 ? +columnTotal.toString()[0] : 0;

    if (!addends[k]) addends.push([]);

    if (i === -1) {
      addends[k].unshift('' + columnTotal);
      remainder = 0;
    } else addends[k].unshift('' + columnDigit);
  }

  const add = (x,y) => {
    x = x.split('');
    y = y.split('');
    columnTotal = 0;
    remainder = 0;
    let result = '';

    while (x.length || y.length || remainder) {
      columnTotal = ~~x.pop() + ~~y.pop() + remainder;
      result = columnTotal % 10 + result;
      remainder = columnTotal > 9 ? 1 : 0;
    }

    return result;
  };

  return addends
    .reduce((acc,curr,i) => {
      curr = curr.join('') + '0'.repeat(i);
      return add(acc, curr);
    }, '0')
    .replace(/^0+/, '');
}

multiplyBigNumbers('123', '99'); //=> "12177"
multiplyBigNumbers('1000000000000', '1000000000000'); //=> "1000000000000000000000000"
