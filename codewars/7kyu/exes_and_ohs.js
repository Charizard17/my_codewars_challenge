// INSTRUCTIONS
// Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// SOLUTION
// input is string
// turn all chars to lowercase first

// split string and convert it to an array

// set a count variable. initial zero

// loop the letters array
// if item is x, increse count, else decrease count

// if count is zero, return true, else false

function XO(str) {
  let letters = str.toLowerCase().split("");

  let count = 0;

  letters.forEach((item) => {
    if (item == "x") {
      ++count;
    } else if (item == "o") {
      --count;
    }
  });

  if (count == 0) {
    return true;
  } else {
    return false;
  }
}

// time complexity is O(n)
