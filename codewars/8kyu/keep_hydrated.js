// INSTRUCTIONS
// Keep Hydrated!

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated,
// he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number
// of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

// SOLUTION
// there is no constraints,
// thats why firstly validate the time, if it is number or not

// time divide by 2 gives us the exact litres of water Nathan will drink

// slice the decimal and keep the integer part

// return the integer part

function litres(time) {
  if (time > 0) {
    return Math.trunc(time / 2);
  }

  return 0;
}

// time complexity is O(1);
