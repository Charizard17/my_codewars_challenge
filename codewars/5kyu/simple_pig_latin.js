// INSTRUCTIONS
// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// SOLUTION
// split string into an array

// loop array and check if any punctuation marks exists
// if not format the word as expected
// then push it in an empty array

// convert array to a string and return it

function pigIt(str) {
  let array = str.split(" ");

  var editedArray = [];
  for (var i = 0; i < array.length; ++i) {
    if (/[,.?!!"';:(){}\/\*@–\-]/.test(array[i]) == false) {
      const firstLetter = array[i][0];
      const restOfTheLetters = array[i].slice(1);
      editedArray.push(restOfTheLetters.concat(firstLetter, "ay"));
    } else {
      editedArray.push(array[i]);
    }
  }

  return editedArray.join(" ");
}
