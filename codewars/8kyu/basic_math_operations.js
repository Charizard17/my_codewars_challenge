// INSTRUCTIONS
// Basic Mathematical Operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// SOLUTION
// inputs has no constraints but the instructions are clear,
// thats why no need to validate inputs

// make operators object
// its keys are basic four js operators and each value is a function
// which return this mathematical operations result

// return the result

function basicOp(operation, value1, value2) {
  let operators = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
  };

  return operators[operation](value1, value2);
}

// time complexity looks O(1) to me
// but it may-be O(n) also - thats why I am not sure about it
