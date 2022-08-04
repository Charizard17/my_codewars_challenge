// INSTRUCTIONS
// Is this a triangle?

// Implement a function that accepts 3 integer values a, b, c. The function should
// return true if a triangle can be built with the sides of given length and false
// in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// SOLUTION
// this function accepts only integers
// so input validation is not necessary

// sum of the two surfaces lengths must bigger than the left one

// check 3 edge case
// if it fails, return false

function isTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  } else {
    return true;
  }
}
