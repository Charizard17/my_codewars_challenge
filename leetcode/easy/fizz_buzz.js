// INSTRUCTIONS
// Fizz Buzz

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]

// SOLUTION
// create an array for output for returning

// make a for loop for given integer parameter

// push values to output array depends on the divisibility of iterator

// return output array

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let outputArray = [];
  for (var i = 1; i <= n; ++i) {
    if (i % 15 == 0) {
      outputArray.push("FizzBuzz");
    } else if (i % 5 == 0) {
      outputArray.push("Buzz");
    } else if (i % 3 == 0) {
      outputArray.push("Fizz");
    } else {
      outputArray.push(i.toString());
    }
  }

  return outputArray;
};
