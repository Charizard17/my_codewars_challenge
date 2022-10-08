// INSTRUCTIONS
// Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// SOLUTION
function findAverage(array) {
  if (array.length == 0) {
    return 0;
  }
  return array.reduce((sum, x) => sum + x, 0) / array.length;
}

// Time complexity is O(n)
