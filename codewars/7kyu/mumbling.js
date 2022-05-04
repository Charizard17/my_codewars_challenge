// INSTRUCTIONS
// Mumbling

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// SOLUTION
// s parameter contains only letters from a..z and A..Z
// thats why no need to extra validation

// inputs can be uppercase, thats why convert string to lowercase, to be sure

// split parameter s string to an array

// map the array and multiply letters depends on its position

// map the array and capitalize every string item

// array join with dash (-), and return the string value

function accum(s) {
  let letters = s.toLowerCase().split("");

  letters = letters.map((letter, index) => {
    if (index > 0) {
      letter = letter.repeat(index + 1);
      letter = letter[0].toUpperCase() + letter.slice(1);
    } else {
      letter = letter.toUpperCase();
    }
    return letter;
  });

  return letters.join("-");
}

// I'm not sure about time complexity of repeat() method
// if its O(1), then time complexity of this function is O(n)
// if its O(n), then time complexity of this function is O(n^2)
