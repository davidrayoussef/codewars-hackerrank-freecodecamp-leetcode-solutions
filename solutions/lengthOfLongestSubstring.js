// Given a string, find the length of the longest substring without repeating characters.
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

const str = "abcabcbb";

function lengthOfLongestSubstring(s) {
  if (!s) return 0;
  if (s.length === 1) return 1;

  let acc = s[0];
  let max = 0;

  for (let i = 1; i < s.length; i++) {
    if (!acc.split('').includes(s[i])) {
      acc += s[i];
    }
    else {
      s = s.substr(1);
      i = 0;
      acc = s[0];
    }
    max = Math.max(acc.length, max);
  }

  return max;
};

lengthOfLongestSubstring(str); //=> 3
