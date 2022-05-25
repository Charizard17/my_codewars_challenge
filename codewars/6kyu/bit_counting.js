// INSTRUCTIONS
// Bit Counting

// Write a function that takes an integer as input, and returns the number of
// bits that are equal to one in the binary representation of that number. You
// can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function
// should return 5 in this case

// SOLUTION
// input is non-negative integer

// set a variable for bit counts

// while the rest of int is greater than zero
// find maximum possible 2^n
// extract it from int and increase bit count

// when the rest is zero, break the loop and return bit counting

var countBits = function (integer) {
  let bit = integer.toString(2);

  return (bit.match(/1/g) || []).length;
};

// time complexity looks like O(n)
