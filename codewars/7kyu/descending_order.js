// INSTRUCTIONS
// Descending Order
// Your task is to make a function that can take any non-negative integer
// as an argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// SOLUTION
// non-negative integer -> no need to validate it

// split n into a digits array

// sort that array as a descending order

// join items and return highest possible number

function descendingOrder(n) {
  let numbers = n
    .toString()
    .split("")
    .map((x) => +x); // ['1', '2', ..] => [1, 2, ..]

  numbers = numbers.sort(function (a, b) {
    return b - a;
  });

  return parseInt(numbers.join(""));
}

// time complexity is O(n)
