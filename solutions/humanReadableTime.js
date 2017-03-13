/*
Write a function which takes a non-negative integer (seconds) as input and returns the time in a human-readable
format (HH:MM:SS).

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59).
*/

function humanReadableTime(seconds) {
  const zeroPad = (n) => '0'.repeat(String(n).length % 2) + n;
  const hours = parseInt(seconds / 3600);
  const minutes = parseInt(seconds / 60) % 60;
  seconds = seconds % 60;

  return `${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(seconds)}`;
}

humanReadableTime(0); //=> "00:00:00"
humanReadableTime(5); //=> "00:00:05"
humanReadableTime(60); //=> "00:01:00"
humanReadableTime(86399); //=> "23:59:59"
humanReadableTime(359999); //=> "99:59:59"
