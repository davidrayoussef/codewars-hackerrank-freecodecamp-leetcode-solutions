/*
Write a function to test if two objects have the same properties and values. Remember that an object can contain other
objects. The function should also be able to correctly compare simple values, like strings and numbers.

To make things simpler, it will only have to deal with simple values and objects and arrays containing strings,
booleans and numbers, without taking into account regular expressions, dates and functions.
*/

function deepCompare(o1, o2) {
  if (o1 === o2) return true;

  if (Array.isArray(o1)) {
    const haveSameType = o2.every(v => typeof v === typeof o1[0]);

    if (haveSameType) return o1.toString() === o2.toString();
    else return o1.sort().toString() === o2.sort().toString();
  }

  if (o1 && typeof o1 === 'object') {
    if ( Object.keys(o1).length !== Object.keys(o2).length ) return false;

    const haveSameKeys = Object.keys(o1).every(key => o2.hasOwnProperty(key));
    const haveSameValues = Object.keys(o1).every((key,i,a) => o1[key] === o2[key]);

    return haveSameKeys && haveSameValues;
  }

  else return false;
}

deepCompare(1, 1); //=> true
deepCompare(1, '1'); //=> false
deepCompare(null, undefined); //=> false
deepCompare({ name: 'Joe' }, { name: 'Joe' }); //=> true
deepCompare({ name: 'Joe', surname: 'Smith' }, { name: 'Joe' }); //=> false
deepCompare([1, 2, null, undefined, {name: 'Joe'} ], [1, 2, null, undefined, {name: 'Joe'}]); //=> true
deepCompare([1, 2, 3], [1, 3, 2]); //=> false
