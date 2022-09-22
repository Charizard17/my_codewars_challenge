// INSTRUCTIONS
// String ends with?

// Complete the solution so that it returns true if the first argument(string)
// passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// SOLUTION
// as inputs clear defined in the description,
// no need to validate inputs

function solution(str, ending) {
  return str.endsWith(ending);
}
