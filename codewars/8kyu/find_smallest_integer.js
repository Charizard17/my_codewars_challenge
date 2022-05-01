// INSTRUCTIONS
// Find the smallest integer in the array

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// SOLUTION
// input is an array of integersan it can't be empty, thats why we don't have to validate it

// set a variable for smallest integer that will be equal to first item of input array initially

// for each loop to args array

// if item is smaller than the setted variable, then set it to that value

// return smallest integer variable

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallestInteger = args[0];

    args.forEach((integer) => {
      if (integer < smallestInteger) {
        smallestInteger = integer;
      }
    });

    return smallestInteger;
  }
}

// time complexity is O(n)