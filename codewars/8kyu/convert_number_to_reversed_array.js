// INSTRUCTIONS
// Convert number to reversed array of digits

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits
// of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// SOLUTION
// input check is not necessary

// convert input type number to string

// split string and turn it to an array

// reverse the array

// map the array and turn every items type from string to number

// return the array

function digitize(n) {
  n = n.toString();
  let digits = n.split("");
  digits = digits.reverse();
  digits = digits.map((x) => +x);
  return digits;
}

// time complexity is O(n)
