// INSTRUCTIONS
// Beginner Series #3 Sum of Numbers

// Given two integers a and b, which can be positive or negative,
// find the sum of all the integers between and including them and
// return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// SOLUTION
// there is no constrains
// but I think we can continue without extra input validation

// if both integers are same, then return one of them

// set an empty variable which equal to zero;

// in if condition, find the smaller value and make a loop
// then sum it all the values between and including them

// return the sum variable

function getSum(a, b) {
  if (a == b) {
    return a;
  }

  let sum = 0;

  if (a < b) {
    for (let i = a; i <= b; ++i) {
      sum += i;
    }
  } else {
    for (let i = b; i <= a; ++i) {
      sum += i;
    }
  }

  return sum;
}

// looks like O(n) time complexity
