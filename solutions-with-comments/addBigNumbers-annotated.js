/*
Given the string representations of two integers, return the string representation of
the sum of those integers.

Big numbers in JavaScript are represented by scientific notation, so this must be solved
using single-digit addition
*/

function addBigNumbers(a, b) {
  // Split each number string into an array of individal digits, then map over them to convert them to numbers.
  a = a.split('').map(Number);
  b = b.split('').map(Number);
  // Since JavaScript can't handle very large numbers, we'll be adding individual digits together starting from
  // the right side, like elementary math. We'll use a 'columnTotal' variable to store the result of each column.
  let columnTotal = 0;
  // If the total of a column is 10 or over, we'll need to store it in a 'carryover' variable to use it in the next column.
  let carryover = 0;
  // We'll define a 'result' variable to concatenate each column total into, assigning it initially to an empty string.
  let result = '';

  // We'll use a while loop to iterate. For each iteration, we pop off the last digit from the end of each of the two arrays,
  // so this loop will continue as long as there are still digits in any one of the two arrays, or if there's still a carryover.
  // Using the array.length property in the condition is equivalent to checking whether array.length > 0.
  while (a.length || b.length || carryover) {
    // Here we pop off the last digit of each array and add them together, along with the carryover (which will either be 1 or 0).
    // Although its main purpose is as a shorthand for Math.floor, the double tilde operator is used here to turn a non-number
    // into a zero. This is needed just in case one array is shorter than the other. Toward the end of the loop, that array
    // might have no more values, so popping it will give you an 'undefined,' and adding undefined to a number will give you
    // NaN (Not a Number), and we don't want that. Alternatively, we can do (array.pop() || 0).
    columnTotal = ~~a.pop() + ~~b.pop() + carryover;
    // Since the column total might be over 10, we use the modulo operator to get the remainder from 10, and then concatenate that
    // to the left side of the result string.
    result = columnTotal % 10 + result;
    // To get the carryover, we check if the column total is over 9. If it is, then let's carry over the 1.
    carryover = columnTotal > 9 ? 1 : 0;
  }

  // Concatenating strings together might leave you with a leading zero, so we use a regular expression to remove them.
  // The caret operator here matches the beginning of a string.
  return result.replace(/^0/, '');
}

addBigNumbers('752856458734565548245482', '245665677579525565437591'); //=> "998522136314091113683073"
