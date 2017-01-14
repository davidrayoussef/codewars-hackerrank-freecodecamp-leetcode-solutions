// Convert the given number into a roman numeral.

function convertToRomanNumeral(num) {
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
  let result = '';

  Object.keys(romanNumerals).map(key => {
    while (num >= romanNumerals[key]) {
      result += key;
      num -= romanNumerals[key];
    }
  });

  return result;
}

convertToRomanNumeral(4); //=> "IV"
convertToRomanNumeral(12); //=> "XII"
convertToRomanNumeral(45); //=> "XLV"
convertToRomanNumeral(500); //=> "D"
convertToRomanNumeral(798); //=> "DCCXCVIII"
convertToRomanNumeral(1000); //=> "M"
convertToRomanNumeral(3999); //=> "MMMCMXCIX"
