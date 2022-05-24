// INSTRUCTIONS
// Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// SOLUTION
// input lists constraints ???
// are all items are non-negative integer and less than 10?
// if so, converting it to a string and deleting b items would be a solution

// not a nice solution but looping array b would solve it

// loop array b and filter array a depends on the item of b

// return the difference array

function arrayDiff(a, b) {
  b.forEach((itemB) => {
    a = a.filter((itemA) => itemA != itemB);
  });

  return a;
}

// time complexity is O(n^2)
// improvement??
