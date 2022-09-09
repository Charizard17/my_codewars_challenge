// INSTRUCTIONS
// You only need one

// You will be given an array a and a value x.
// All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// SOLUTION

// no need to validate 'x'
// so we can directly check if it is exist in the giving array

function check(a, x) {
  return a.includes(x);
}
