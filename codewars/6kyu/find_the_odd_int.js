// INSTRUCTIONS
// Find the odd int

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// SOLUTION
// no need an extra input validation,
// because there will be only one integer that appears an odd times

// sort the array

// loop the array

// if current number is different than previous one
// and if number counter is odd
// then return it

// if current number is different than previous one
// and number is in the last place of the array
// than return the number

// if current number is same with previous one
// increase number counter

function findOdd(A) {
  A = A.sort((a, b) => a - b);

  let counter = 1;

  if (A.length == 1) {
    return A[0];
  }

  for (let i = 1; i < A.length; ++i) {
    if (A[i - 1] == A[i]) {
      ++counter;
    } else {
      if (counter % 2 != 0) {
        return A[i - 1];
      } else if (i == A.length - 1) {
        return A[i];
      } else {
        counter = 1;
      }
    }
  }
}
