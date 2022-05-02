// INSTRUCTIONS
// Counting Sheep...

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// SOLUTION
// loop the array and look every single element in this array

// if item value is true, then increment sheep counter variable

// return sheep counter variable

function countSheeps(arrayOfSheep) {
  let sheepCount = 0;

  arrayOfSheep.forEach(function (sheep) {
    if (sheep == true) {
      ++sheepCount;
    }
  });

  return sheepCount;
}

// time complexity is O(n)
// space complexity is O(1)