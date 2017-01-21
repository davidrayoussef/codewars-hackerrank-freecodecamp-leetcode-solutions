// Using the start number and end number of a region, return the count of all numbers except numbers with a 5 in it.
// The start and the end number are both inclusive!

function dontGiveMeFive(start, end) {
  return Array
    .from({length: end - start + 1})
    .filter((v,i) => !/5/.test(start + i))
    .length;
}

dontGiveMeFive(4,17); //=> 12
