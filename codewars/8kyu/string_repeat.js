// INSTRUCTIONS
// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// SOLUTION
// 1)
// I want to try brute force solution

// time complexity O(n)

// function repeatStr(n, str) {
//   let returnValue = '';
//   for (let i = 0; i < n; ++i) {
//     returnValue = returnValue + str;
//   }
//   return returnValue;
// }

// 2)
// better approach with javascript repeat() method

// time complexity O(1)

function repeatStr(n, str) {
  return str.repeat(n);
}
