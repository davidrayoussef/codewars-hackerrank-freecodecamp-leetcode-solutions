// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  return str
    .split(/(?=[A-Z])|[_]|[\s]/)
    .map(v => v.toLowerCase())
    .join('-');
}

spinalCase("This Is Spinal Tap"); //=> "this-is-spinal-tap"
spinalCase("thisIsSpinalTap"); //=> "this-is-spinal-tap"
spinalCase("The_Andy_Griffith_Show"); //=> "the-andy-griffith-show"
spinalCase("Teletubbies say Eh-oh"); //=> "teletubbies-say-eh-oh"
spinalCase("AllThe-small Things"); //=> "all-the-small-things"
