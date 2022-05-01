// INSTRUCTIONS
// Square(n)Sum

// Complete the square sum function so that it squares each number passed into it
//  and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// SOLUTION
// do I have to validate the array? if its all number, then not

// loop the array, make square each item, return the sum

function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; ++i) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

// time complexity is O(n)
