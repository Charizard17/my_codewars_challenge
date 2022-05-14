// INSTRUCTIONS
// Beginner - Lost Without a Map

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// SOLUTION
// map the array and return its new doubled version

function maps(x) {
  return x.map((x) => x * 2);
}

// time complexity is O(n)
