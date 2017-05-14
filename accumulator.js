/*
Write a function accumulator() that gives you these results...
accumulator("abcd");    // "A-Bb-Ccc-Dddd"
accumulator("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accumulator("cwAt");    // "C-Ww-Aaa-Tttt"
*/

function accumulator(str) {
  return str
    .split('')
    .map((v,i) => v.repeat(i + 1))
    .map(v => v[0].toUpperCase() + v.slice(1).toLowerCase())
    .join('-');
}

accumulator('abcd'); //=> "A-Bb-Ccc-Dddd"
accumulator('RqaEzty'); //=> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accumulator('cwAt'); //=> "C-Ww-Aaa-Tttt"
