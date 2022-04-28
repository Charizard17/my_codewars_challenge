// INSTRUCTIONS
// It's pretty straightforward. Your goal is to create a function that removes the first
// and last characters of a string. You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

// SOLUTION
function removeChar(str) {
  let value = str;
  if (value.length >= 2) {
    value = value.slice(1, value.length - 1);
  }
  return value;
}
