// Make a function that looks through an array of objects (first argument) and returns
// an array of all objects that have matching property and value pairs (second argument).
// Each property and value pair of the source object has to be present in the object from
// the collection if it is to be included in the returned array.
function whatIsInAName(collection, source) {
  let result = [];
  collection.map(obj => {
    return Object.keys(source).every(key => {
      return obj[key] === source[key];
    }) && result.push(obj);
  });
  return result;
}

whatIsInAName(
  [{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }],
  { "a": 1, "b": 2 }
); //=> { "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }



// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
function pairElement(str) {
  const pairs = {
    G: 'C',
    C: 'G',
    A: 'T',
    T: 'A'
  };

  return str.split('').map(letter => [letter, pairs[letter]]);
}

pairElement("GCG");



// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  return str
    .split('')
    .map((v,i) => {
      if (str[i + 1] && str[i + 1].charCodeAt() - str[i].charCodeAt() !== 1) {
        return String.fromCharCode(str[i].charCodeAt() + 1);
      } else return '';
    }).join('') || undefined;
}

fearNotLetter("bcd");


// Write a function that takes two or more arrays and returns a new array of unique values
// in the order of the original provided arrays.
// All values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
function uniteUnique(arr) {
  return Array
    .apply(null, arguments)
    .reduce((a,b) => a.concat(b))
    .filter((v,i,a) => a.indexOf(v) === i);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// jshint esversion:6
function convertHTML(str) {
  const htmlCharacters = {
    '&': '&​amp;',
    '<': '&​lt;',
    '>': '&​gt;',
    '"': '&​quot;',
    '\'': '&​apos;'
  };
  const replacer = (match) => htmlCharacters[match];
  return str.replace(/[&<>"']/g, replacer);
}

convertHTML("<>")


// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  return str.split(/(?=[A-Z])|[_]|[\s]/).map(v => v.toLowerCase()).join('-');
}

// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".



// Given a positive integer num, return the sum of all odd Fibonacci numbers that are
// less than or equal to num.
function sumFibs(num) {
  let a = 1;
  let b = 1;
  let temp;
  let result = [1, 1];
  while (a + b <= num) {
    result.push(a + b);
    temp = a;
    a = b;
    b = temp + b;
  }
  return result.filter(v => v % 2 !== 0).reduce((acc, curr) => acc + curr);
}

sumFibs(10);



// Sum all the prime numbers up to and including the provided number.
function sumPrimes(num) {
  let primes = [];
  const isPrime = (n) => {
    let divisor = 2;
    while (divisor < n) {
      if (n % divisor === 0) {
        return false;
      } else divisor++;
    }
    return true;
  };

  for (let i = 2; i <= num; i++) {
    isPrime(i) && primes.push(i);
  }

  return primes.reduce((a,b) => a + b);
}

sumPrimes(10);



// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters.
function smallestCommons(arr) {
  const min = Math.min.apply(null, arr);
  const max = Math.max.apply(null, arr);
  const numsBetween = Array.apply(null, Array(max - min + 1)).map((v,i) => min + i);
  let acc = max;

  const areDivisible = (dividend) => {
    return numsBetween.every(divisor => dividend % divisor === 0);
  };

  while (true) {
    if (areDivisible(acc)) {
      return acc;
    } else acc += max;
  }
}

smallestCommons([23,18]);



// Return an English translated sentence of the passed binary string.
function binaryAgent(str) {
  return str
    .split(' ')
    .map(v => String.fromCharCode(parseInt(v, 2).toString(10)))
    .join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


// Create a function that takes two or more arrays and returns an array of the
// symmetric difference (△ or ⊕) of the provided arrays.
// jshint esversion:6
function sym() {
  let xs = Array
    .apply(null, arguments)
    .map(arr => arr.filter((v,i,a) => a.indexOf(v) === i));

  function getDiff(xs) {
    let arr1 = xs[0];
    let arr2 = xs[1];
    xs.splice(0, 2);

    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          arr1.splice(i, 1);
          arr2.splice(j, 1);
          i = 0;
          j = 0;
        }
      }
    }
    if (xs.length) {
      xs.unshift(arr1.concat(arr2));
      return getDiff(xs);
    }
    else return arr1.concat(arr2);
  }

  return getDiff(xs);
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
