// INSTRUCTIONS
// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes
// two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// SOLUTION
// no need to validate input name format, according to instructions

// split name into an array

// map the array and delete all characters except the first one

// concatenate letters with a dot ".", and turn it to a string

// make upper case the string and return it

function abbrevName(name) {
  let firstAndLastName = name.split(" ");

  let abbreviated =
    firstAndLastName[0].charAt(0) + "." + firstAndLastName[1].charAt(0);

  return abbreviated.toUpperCase();
}

// time complexity is O(n)
