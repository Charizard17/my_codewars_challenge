// INSTRUCTIONS
// Century From Year

// Introduction
// The first century spans from the year 1 up to and including the year 100,
// the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// SOLUTION
// check if input year is an integer

// divide input year by 100, and get the integer part
// if year module 100 doesn't throw 0, then add 1

// this mathematical equation gives the century

// return the century

function century(year) {
  let cent = Math.trunc(year / 100);
  if (year % 100 != 0) {
    ++cent;
  }
  return cent;
}

// time complexity is O(1)
