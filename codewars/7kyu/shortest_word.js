// INSTRUCTIONS
// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// SOLUTION
// no extra valdidation required

// split string and turn it to an array

// set a variable for word length - initial 0

// loop array and check every length of words

// return the word length variable

function findShort(s) {
  let shortestWordLength = 0;

  const words = s.split(" ");
  shortestWordLength = words[0].length;

  for (let i = 0; i < words.length; ++i) {
    if (shortestWordLength > words[i].length) {
      shortestWordLength = words[i].length;
    }
  }

  return shortestWordLength;
}

// time complexity is O(n);
