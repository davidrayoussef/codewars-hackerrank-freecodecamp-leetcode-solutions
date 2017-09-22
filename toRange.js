/*
Your task is to take arrays of numbers and compress them into ranges.

A range, or series of consecutive numbers, will be represented as two numbers separated by an underscore.
Ranges and individual numbers should be separated by a comma.

For example:
- The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
- The number 6 would just be "6"
- The numbers 3,4,5,6,9 would be "3_6,9"

Using the above system, you should write two functions:
toRange - convert an array of numbers to a range string
toArray - convert a range string back to an array

Warnings:
The numbers could arrive all jumbled up, so you'll need to sort them. Sometimes the same number may appear more than
once, duplicates should be discarded.

Edge cases:
An empty array should become an empty string if passed to toRange and vise versa for the toArray function. Also,
ranges of 2 digits will take the same space whether they are represented as a sequence or a range (i.e.,
"5,6,8,9".length === "5_6,8_9".length so there will be no compression, but represent them as a range anyway for consistency).
*/

function toRange(arr, range = []) {
  return arr
    .filter((v,i,a) => a.indexOf(v) === i)
    .sort((a,b) => a - b)
    .reduce((acc,curr,i,a) => {
      if (a[i + 1] - curr !== 1)  {
        range.push(curr);
        acc.push( range.length === 1 ? range.pop() : `${range.shift()}_${range.pop()}` );
        range = [];
      }
      else range.push(curr);
      return acc;
    }, [])
    .join(',');
}

function toArray(str) {
  return !str.length ? [] : str
    .split(',')
    .map(v => {
      if (!v.includes('_')) return +v;
      else {
        const [ from, to ] = v.split('_').map(Number);
        return Array.from({length: to - from + 1}, (_,i) => i + from);
      }
    })
    .reduce((a,b) => a.concat(b), []);
}

toRange([3,4,5,7,8,9,10,12,13,14,15]); //=> "3_5,7_10,12_15"
toArray('3_5,7_10,12_15'); //=> "[3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15]"
