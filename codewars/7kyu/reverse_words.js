// INSTRUCTIONS
// Reverse words

// Complete the function that accepts a string parameter,
// and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// SOLUTION
function reverseWords(string) {
  return string
    .split(" ")
    .map((word) => (word = word.split("").reverse().join("")))
    .join(" ");
}

// I do not think that this is the correct solution,
// but it passes all the sample tests...
