// INSTRUCTIONS
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// SOLUTION
// num to digits array - turn it to string

// iterate array items and square every digit

// concatenate every iteration

function squareDigits(num){
    let result = 'temp';
    
    let digits = num.toString().split('');
    let realDigits = digits.map(Number);
    for (var i = 0; i < realDigits.length; ++i) {
      result = result + realDigits[i]*realDigits[i];
    }
    
    // delete 'temp' from result string
    result = parseInt(result.replace('temp', ''));
    
    return result;
  }