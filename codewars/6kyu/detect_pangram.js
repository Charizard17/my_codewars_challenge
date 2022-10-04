// INSTRUCTIONS
// Detect Pangram

// A pangram is a sentence that contains every single letter of the
// alphabet at least once. For example, the sentence "The quick brown
// fox jumps over the lazy dog" is a pangram, because it uses the
// letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if
// it is, False if not. Ignore numbers and punctuation.

// SOLUTION
// this problem can be solved with RegExps

function isPangram(string) {
  string = string.toLowerCase();
  const regExp = /([a-z])(?!.*\1)/g;
  return (string.match(regExp) || []).length === 26;
}
