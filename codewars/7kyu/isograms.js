// INSTRUCTIONS
// Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is
// an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// SOLUTION
// first of all, turn string to lover case string

// remove all empty spaces

// create an empty array

// split the string and loop it
// push characters into the array

// if character already in array, return false
// otherwise return true

// this solution is O(n^2)
// right now nothing better come to my mind...

function isIsogram(str) {

  let string = str.toLowerCase().replace(/ /g, "");
  let letterArray = [];
  let splittedStringArr = string.split("");

  for (let i = 0; i < splittedStringArr.length; ++i) {
    if (letterArray.includes(splittedStringArr[i]) == false) {
      letterArray.push(splittedStringArr[i]);
    }
  }

  if (letterArray.length == splittedStringArr.length) {
    return true;
  } else {
    return false;
  }
}

// time complexity is O(n^2) – as expected..
