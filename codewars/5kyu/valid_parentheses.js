// INSTRUCTIONS
// Valid Parentheses

// Write a function that takes a string of parentheses, and determines
// if the order of the parentheses is valid. The function should return
// true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

// SOLUTION
// split the parantheses string into an array

// set an empty counter variable, default to 0

// loop the parantheses array
// if opening parantheses, then increase the counter
// otherwise decrease the counter

// edge case: if counter goes below zero, return false

// return true if counter is zero
// otherwise return false

function validParentheses(parens) {
  const array = parens.split("");
  let counter = 0;

  for (var i = 0; i < array.length; ++i) {
    if (array[i] == "(") {
      ++counter;
    } else {
      --counter;
    }

    if (counter < 0) {
      return false;
    }
  }

  return counter == 0 ? true : false;
}

// time complexity is O(n)
