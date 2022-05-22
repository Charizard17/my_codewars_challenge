// INSTRUCTIONS
// Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string,
// but with all five or more letter words reversed (Just like the name of this Kata). Strings
// passed in will consist of only letters and spaces. Spaces will be included only when more
// than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )
// => returns "This is rehtona test"

// SOLUTION
// no need to make extra input validation

// split string and turn it to an array

// map the array and check every word
// if word has five or more letters, than reverse it

// concatenate array and return the string

function spinWords(string) {
  let array = string.split(" ");

  array = array.map((word) => {
    if (word.length > 4) {
      word = word.split("").reverse().join("");
    }
    return word;
  });

  return array.join(" ");
}

// time complexity is O(n^2)
// is there any way to reverse word without splitting words?...
