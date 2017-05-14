/*
The internet is a very confounding place for some adults. Tom has just joined an online forum and is trying to fit
in with all the teens and tweens. It seems like they're speaking in another language! Help Tom fit in by translating
his well-formatted English into n00b language.

The following rules should be observed:
- "to" and "too" should be replaced by the number 2, even if they are only part of a word (e.g. today = 2day)
- "for" and "fore" should be replaced by the number 4
- any remaining double o's should be replaced with zeros (e.g. noob = n00b)
- "be", "are", "you", "please", "people", "really", "have", and "know" should be changed to "b", "r", "u", "plz",
  "ppl", "rly", "haz", and "no" respectively (even if they are only part of the word)
- the letter "s" should always be replaced by a "z", maintaining case
- "LOL" must be added to the beginning of any input string starting with a "w"
- "OMG" must be added to the beginning (after LOL, if applicable,) of a string 32 characters or longer
- all evenly numbered words must be in ALL CAPS (example: Cake is very delicious. => Cake IZ very DELICIOUZ)
- if the input string starts with "h", the entire output string should be in ALL CAPS
- periods ( . ), commas ( , ), and apostrophes ( ' ) are to be removed
- a question mark ( ? ) should have more question marks added to it, equal to the number of words in the sentence
  (example: "Are you a foo?" has 4 words, so it would be converted to "r U a F00????")
- exclamation points ( ! ) should be replaced by a series of alternating exclamation points and the number 1, equal
  to the number of words in the sentence (example: "You are a foo!" becomes "u R a F00!1!1")
*/

function transformText(text) {
  const replaceMap = {
    'to': '2',
    'too': '2',
    'for': '4',
    'fore': '4',
    'oo': '00',
    'be': 'b',
    'are': 'r',
    'you': 'u',
    'please': 'plz',
    'people': 'ppl',
    'really': 'rly',
    'have': 'haz',
    'know': 'no',
    's': 'z'
  }

  const depunctuate = (str) => str.replace(/[.,']/g, '');

  const replace = (str) => str
    .replace(
      /too?|fore?|oo|be|are|you|please|people|really|have|know|s/gi, (match) =>
      replaceMap[match.toLowerCase()]
    )

  const lolify = (str) => {
    if ( /w/i.test(str[0]) || /w/i.test(str[4]) ) return 'LOL ' + str;
    return str;
  };

  const omgify = (str) => {
    if ( str.match(/[^!]+/g).join('').length >= 32 ) {
      return str.startsWith('LOL') ? 'LOL OMG ' + str.slice(4) : 'OMG ' + str;
    }
    return str;
  };

  const exclamationpointify = (str) => {
    const length = str.split(' ').length;
    return str.replace('!', (match) => {
      return match + '1!'.repeat(length).slice(0, length - 1)
    });
  };

  const questionmarkify = (str) => {
    if (str.includes('?')) {
      return str.replace(/\?/g, '?'.repeat(str.split(' ').length));
    }
    return str;
  };

  const capitalize = (str) => {
    if (str[0].toLowerCase() === 'h') {
      return str.toUpperCase();
    }
    else {
      return str.split(' ').map((str,i) => i % 2 !== 0 ? str.toUpperCase() : str).join(' ');
    }
  };

  const pipe = (...fns) => (arg) => fns.reduce((result,fn) => fn(result), arg);

  const transform = pipe(depunctuate, replace, lolify, omgify, exclamationpointify, questionmarkify, capitalize);

  return transform(text);
}

transformText("Hi, how are you today?"); //=> "HI HOW R U 2DAY?????"
transformText("I think it would be nice if we could all get along."); //=> "OMG I think IT would B nice IF we COULD all GET along"
transformText("Let's eat, Grandma!"); //=> "Letz EAT Grandma!1!"
