// Convert the given number into a roman numeral.

function convertIntegerToRomanNumeral(num) {
  const romanNumerals = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  };

  return Object.keys(romanNumerals).reduce((acc, key) => {
    while (num >= romanNumerals[key]) {
      acc += key;
      num -= romanNumerals[key];
    }
    return acc;
  }, '');

}

convertIntegerToRomanNumeral(4); //=> "IV"
convertIntegerToRomanNumeral(12); //=> "XII"
convertIntegerToRomanNumeral(45); //=> "XLV"
convertIntegerToRomanNumeral(500); //=> "D"
convertIntegerToRomanNumeral(798); //=> "DCCXCVIII"
convertIntegerToRomanNumeral(1000); //=> "M"
convertIntegerToRomanNumeral(3999); //=> "MMMCMXCIX"
