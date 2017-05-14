/*
Given a number, return it as a string in Expanded Form. For example:
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/

function expandedForm(num) {
  return String(num)
    .split('')
    .reverse()
    .map((v,i) => v !== '0' ? v + '0'.repeat(i) : '')
    .reverse()
    .filter(v => v !== '')
    .join(' + ');
}

expandedForm(70304); //=> "70000 + 300 + 4"
