// INSTRUCTIONS
// Moving Zeros To The End

// Write an algorithm that takes an array and moves all
// of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"])
// returns[false,1,1,2,1,3,"a",0,0]

// SOLUTION
// filter zeros from the array

// find how many zeros exist in the input array

// push that many zeros into the array and return it

function moveZeros(arr) {
  let filteredArray = arr.filter((item) => item !== 0);
  const countOfZeros = arr.length - filteredArray.length;
  for (var i = 0; i < countOfZeros; ++i) {
    filteredArray.push(0);
  }
  return filteredArray;
}

// time complexity is O(n)
