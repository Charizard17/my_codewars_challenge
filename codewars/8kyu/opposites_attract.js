// INSTRUCTIONS
// Opposites Attract

// Timmy & Sarah think they are in love, but around where they live, they will only
// know once they pick a flower each. If one of the flowers has an even number of petals
// and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true
// if they are in love and false if they aren't.

// SOLUTION

// according to tests, flower could have 0 patel,
// so no need to validate inputs

// check petals with modulo
// if both even then return false
// otherwise return true

function lovefunc(flower1, flower2) {
  if (flower1 % 2 == flower2 % 2) {
    return false;
  } else {
    return true;
  }
}

// time complexity is O(1)
