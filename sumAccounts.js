/*
Kushim, the Sumerian farmer's accountant, has noted down on his clay tablet who owes the farmer for barley,
and who has made an advance payment. He wants you to use the modern power of computing to sum all of the values
to see the overall balance of the farmer's books. To help you he has supplied his notes in text form, and has
put a currency symbol before each account value.

Note:
Each account value includes the '$' symbol. For example: $300, or -$300.
There may be other numbers in the text, but won't contain the '$' symbol.
Your output should be a positive or negative integer; it should not have the '$' symbol.
*/

function sumAccounts(text) {
  return text
    .match(/-*\$[0-9]+/g)
    .map(v => v.replace('$', ''))
    .map(Number)
    .reduce((acc,curr) => acc + curr);
}

sumAccounts("Hashim the greengrocer: $200. Prince Enki -$300. Barley Bee:-$100, promised to pay next week."); //=> -200
