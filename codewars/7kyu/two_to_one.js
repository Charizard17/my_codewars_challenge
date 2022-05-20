// INSTRUCTIONS
// Two to One

// ake 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible, containing
// distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// SOLUTION
// concatenate both input strings

// split string and save it in a variable of array

// sort the array

// set an empty array for filtered letters

// remove repeated letters and save them in filtered letters array

// return filtered letters as a string

function longest(s1, s2) {
  let string = s1 + s2;

  let array = string.split("");

  array = array.sort();

  let filteredLetters = [];

  for (let i = 0; i < array.length; ++i) {
    if (filteredLetters.includes(array[i]) == false) {
      filteredLetters.push(array[i]);
    }
  }

  return filteredLetters.join("");
}

// time complexity is O(n^2)
