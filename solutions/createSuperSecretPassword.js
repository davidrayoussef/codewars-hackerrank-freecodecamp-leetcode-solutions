// Use the super secret characters in the superSecretChars variable to replace the matching
// characters in your totally insecure password and make it un-hackable.
// eg. replace all 'a's with '@'s. Make sure you get the upper case characters too just in
// case the user wants to SHOUT their password at you.

const superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];

function createSuperSecretPassword(password) {
  superSecretChars.map((v,i) => {
    let reg = new RegExp(v[0], 'gi');
    password = password.replace(reg, v[1]);
  });
  return password;
}

createSuperSecretPassword("haxorpassword"); //=> "5@*0rp@$$w0rd"
