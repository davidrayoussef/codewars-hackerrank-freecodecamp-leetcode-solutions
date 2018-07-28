/*
You're given a flat array of objects with two different type properties...
  - type: 'article'
  - type: 'video'

Example input:
[
  { id: 1, type: 'article' }, 
  { id: 2, type: 'article' }, 
  { id: 3, type: 'article' }, 
  { id: 4, type: 'video' }, 
  { id: 5, type: 'article' }, 
  { id: 6, type: 'article' }, 
  { id: 7, type: 'article' }, 
  { id: 8, type: 'video' }
]

Return an array of arrays, with the article objects grouped together in an array, 
and the video object in a separate array. Your output should look like the following:

Example output:
[
  [
    { id: 1, type: 'article' }, 
    { id: 2, type: 'article' }, 
    { id: 3, type: 'article' }
  ],
  [
    { id: 4, type: 'video' }
  ],
  [
    { id: 5, type: 'article' }, 
    { id: 6, type: 'article' }, 
    { id: 7, type: 'article' }
  ],
  [
    { id: 8, type: 'video' }
  ]
]

Note: The objects in the input array will only contain type properties of "article" and 
"video" and always in lowercase.
*/

function groupByType(arr) {
  return arr.reduce((acc, curr) => {
    if (curr.type === 'video') {
      acc.push([curr]);
      acc.push([]);
    }
    else acc[acc.length - 1].push(curr);

    return acc;
  }, [[]]);
}

const data = [
  { id: 1, type: 'article' }, 
  { id: 2, type: 'article' }, 
  { id: 3, type: 'article' }, 
  { id: 4, type: 'video' }, 
  { id: 5, type: 'article' }, 
  { id: 6, type: 'article' }, 
  { id: 7, type: 'article' }, 
  { id: 8, type: 'video' }, 
  { id: 9, type: 'article' }, 
  { id: 10, type: 'article' }, 
  { id: 11, type: 'article' }, 
  { id: 12, type: 'article' }, 
  { id: 13, type: 'video' }, 
  { id: 14, type: 'article' }, 
  { id: 15, type: 'article' }, 
  { id: 16, type: 'article' }, 
  { id: 17, type: 'article' }
];

JSON.stringify(groupByType(data), null, 2); 