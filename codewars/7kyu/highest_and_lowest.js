// INSTRUCTIONS
// Highest and Lowest

// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// SOLUTION
// split the given numbers of string and store it in a variable

// assign the first element of the number array to the min and max values

// with foreach loop check whether number is bigger than max number
// or smaller than min number

// return max and min number in a string

function highAndLow(numbers) {
  const numbersArray = numbers.split(" ");
  let min = numbersArray[0];
  let max = numbersArray[0];

  numbersArray.forEach((number) => {
    number = parseInt(number);
    if (number > max) {
      max = number;
    } else if (number < min) {
      min = number;
    }
  });

  return max + " " + min;
}

// time complexity O(n)
