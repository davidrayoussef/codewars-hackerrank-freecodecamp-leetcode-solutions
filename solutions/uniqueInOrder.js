/*
Implement a function which takes a sequence and returns a list of items without any elements with the same
value next to each other, while preserving the original order of elements.

For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

Note:
It should work on either a string or an array.
*/

function uniqueInOrder(iterable) {
  return [...iterable].reduce((acc,curr) => {
    if (acc[acc.length - 1] !== curr) acc.push(curr);
    return acc;
  }, []);
}

uniqueInOrder('AAAABBBCCDAABBB'); //=> ["A","B","C","D","A","B"]
