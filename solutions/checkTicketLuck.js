/*
In some countries of the former Soviet Union, there was a belief regarding lucky tickets. A transport ticket of any
sort was believed to possess luck if the sum of digits on the left half of its number was equal to the sum of digits
on the right half.

Examples:
'003111' => 0+0+3 === 1+1+1
'813372' => 8+1+3 === 3+7+2
'17935' => 1+7 === 3+5
'56328116' => 5+6+3+2 === 8+1+1+6

Write a function which returns true if the argument is a string decimal representation of a lucky ticket number,
or false if it's not.
*/

function checkTicketLuck(ticket) {
  const sum = (arr) => [...arr].reduce((acc,curr) => +acc + +curr);
  const middle = Math.floor(ticket.length / 2);
  const firstHalf = ticket.slice(0, middle);
  const secondHalf = ticket.slice(ticket.length % 2 === 0 ? middle : middle + 1);

  return sum(firstHalf) === sum(secondHalf);
}

checkTicketLuck('003111'); //=> true
checkTicketLuck('813372'); //=> true
checkTicketLuck('17935'); //=> true
checkTicketLuck('56328116'); //=> true
checkTicketLuck('3429'); //=> false
