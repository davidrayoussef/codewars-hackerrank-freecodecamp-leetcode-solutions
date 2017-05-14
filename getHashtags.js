/*
You start working for a fancy new startup hoping to revolutionize social networking! They had this great idea
that users should be able to specify relevant keywords to their posts using an ingenious idea by prefixing
those keywords with the pound sign (#). Your job is to extract those keywords so that they can be used later
on for whatever purposes.

Rules:
- Pound signs alone do not count, for example: the string "#" would return an empty array.
- If a word is preceded by more than one hashtag, only the last hashtag counts: e.g. "##alot" would return ["alot"]
- Hashtags cannot be within the middle of a word: e.g. "in#line hashtag" returns an empty array
- Hashtags must precede alphabetical characters: e.g. "#120398" or "#?" are invalid

Input: String of words, where some words may contain a hashtag.
Output: Array of strings that were prefixed with the hashtag, but do not contain the hashtag.
*/

function getHashtags(post) {
  return post
    .split(' ')
    .filter(v => /^#+[a-z]+$/i.test(v))
    .map(v => v.replace(/#/g, ''))
}

getHashtags('Hello #world'); //=> ["world"]
getHashtags('#lol #sorryNotSorry #heya #coolbeans'); //=> ["lol", "sorryNotSorry", "heya", "coolbeans"]
getHashtags('# # # #'); //=> []
getHashtags('this is an in#line hash'); //=> []
getHashtags('too ##many tags'); //=> ["many"]
getHashtags('invalid chars #$? #;wha'); //=> []
getHashtags('#blue#red#yellow#green'); //=> []
