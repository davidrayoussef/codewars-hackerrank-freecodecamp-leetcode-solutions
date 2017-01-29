/*
You are given a list of positive integers. The odd numbers from the list will fight using their 1 bits
from their binary representation, while the even numbers will fight using their 0 bits.
If present in the list, number 0 will be neutral, hence not fight for either side.

You should return:
- 'odds win' if number of 1s from odd numbers is larger than 0s from even numbers
- 'evens win' if number of 1s from odd numbers is smaller than 0s from even numbers
- 'tie' if equal, including if list is empty
*/

function bitsBattle(numbers) {
  if (!numbers.length) return 'tie';

  const evens = numbers
    .filter(v => v % 2 === 0)
    .map(v => (v >>> 0).toString(2))
    .join('')
    .match(/0/g).length || 0;

  const odds = numbers
    .filter(v => v % 2 !== 0)
    .map(v => (v >>> 0).toString(2))
    .join('')
    .match(/1/g).length || 0;

  return evens > odds ? 'evens win' : odds > evens ? 'odds win' : 'tie';
}

bitsBattle([5,3,14]); //=> "odds win"
bitsBattle([3,8,22,15,78]); //=> "evens win"
bitsBattle([]); //=> "tie"
bitsBattle([1,13,16]); //=> "tie"
