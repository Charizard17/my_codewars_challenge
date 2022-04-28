// INSTRUCTIONS
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// SOLUTION
function getCount(str) {
  var vowelsCount = 0;

  if (str.match(/[aeiou]/g) != null) {
    vowelsCount = str.match(/[aeiou]/g).length;
  }

  return vowelsCount;
}
