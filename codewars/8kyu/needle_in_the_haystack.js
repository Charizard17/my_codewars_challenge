// INSTRUCTIONS
// A Needle in the Haystack

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

// SOLUTION
// use indexOf method to get index of the needle

// return the message with the index

function findNeedle(haystack) {
  let index = haystack.indexOf("needle");

  if (index) {
    return "found the needle at position " + index;
  } else {
    return "no needle found";
  }
}

// time complexity is O(n)
