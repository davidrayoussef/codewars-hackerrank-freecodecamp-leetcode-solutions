// Write a function that returns the number of occurrences of a value in an array

function numberOfOccurrences(search, arr) {
  return arr.filter(v => search === v).length;
}

var arr = [0,0,2,2,2,4,0,'a','b','a',0];

numberOfOccurrences(0, arr); //=> 4
numberOfOccurrences(2, arr); //=> 3
numberOfOccurrences('a', arr); //=> 2
