/*
Sort the inner content of every word of a string in descending order.
The inner content is the content of a word excluding the first and last characters.

Some examples:
"sort the inner content in descending order" -> "srot the inner ctonnet in dsnnieedcg oredr"
"wait for me" -> "wiat for me"
"this kata is easy" -> "tihs ktaa is esay"
*/

function sortInnerContent(words) {
  return words
    .split(' ')
    .map(word => word.length < 3 ? word :
      word[0] +
      word
        .slice(1, word.length - 1)
        .split('')
        .sort()
        .reverse()
        .join('') +
      word[word.length - 1]
    )
    .join(' ');
}

sortInnerContent("sort the inner content in descending order"); //=> "srot the inner ctonnet in dsnnieedcg oredr"
