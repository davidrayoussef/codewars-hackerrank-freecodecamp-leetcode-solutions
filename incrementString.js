/*
Your job is to write a function which increments a string, to create a new string. If the string already ends
with a number, the number should be incremented by 1. If the string does not end with a number, the number 1
should be appended to the new string.

Examples:
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

If the number has leading zeros, the amount of digits should be considered.
*/

function incrementString(str) {
  const strNum = str.match(/\d+$/);
  const zeroPad = (n) => {
    const oldNumCharLength = String(strNum).length;
    const newNumCharLength = String(n).length;

    if ( oldNumCharLength > newNumCharLength ) {
      return '0'.repeat(oldNumCharLength - newNumCharLength) + n;
    } else return n;
  };

  return strNum ? str.replace(strNum, zeroPad(+strNum + 1)) : str + 1;
}

incrementString('foo'); //=> "foo1"
incrementString('foobar23'); //=> "foobar24"
incrementString('foo0042'); //=> "foo0043"
incrementString('foo9'); //=> "foo10"
incrementString('foo099'); //=> "foo100"
