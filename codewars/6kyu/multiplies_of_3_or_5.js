// INSTRUCTIONS
// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5
// below the number passed in. Additionally, if the number is negative, return 0
// (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

// SOLUTION
// check if number is negative, return 0

// create a variable for sum to later use purpose

// make a loop from zero to this number and check every value

// if value is multiplies of 15, add value to sum

// if value is multiplies of 5 but not 3, add value to sum

// if value is multiplies of 3 but not 5, add value to sum

// return the sum

function solution(number) {
  if (number < 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < number; ++i) {
    if (
      i % 15 == 0 ||
      (i % 5 == 0 && i % 3 != 0) ||
      (i % 3 == 0 && i % 5 != 0)
    ) {
      sum += i;
    }
  }

  return sum;
}

// time complexity is O(n)
