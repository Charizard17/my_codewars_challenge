// INSTRUCTIONS
// Create Phone Number

// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// SOLUTION
// input array is clear in the description
// so its not necessary to validate it

// convert array to a string and save it in a variable

// split it to 3 part and save them individual variables

// concat them in expected format and return the final value

function createPhoneNumber(numbers) {
  const numbersString = numbers.join("");
  const areaCode = numbersString.slice(0, 3);
  const phoneNumberPartOne = numbersString.slice(3, 6);
  const phoneNumberPartTwo = numbersString.slice(6);

  return "(" + areaCode + ") " + phoneNumberPartOne + "-" + phoneNumberPartTwo;
}

// Time complexity is O(n)
