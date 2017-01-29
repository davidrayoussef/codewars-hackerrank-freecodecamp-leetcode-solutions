// Given a roman numeral, convert it to an integer.
// Input is guaranteed to be within the range from 1 to 3999.

function convertRomanNumeralToInteger(s) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let result = 0;

  while (s.length) {
    let single = s[0];
    let double = s[0] + s[1];

    if (romanNumerals[double]) {
      result += romanNumerals[double];
      s = s.slice(2);
    }
    else {
      result += romanNumerals[single];
      s = s.slice(1);
    }
  }

  return result;
};

convertRomanNumeralToInteger("MCMXCVI"); //=> 1996
