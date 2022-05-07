// INSTRUCTIONS
// List Filtering

// In this kata you will create a function that takes a list of non-negativ
// integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// SOLUTION
// loop the array and check every elements type

// if type is number
// then save it to the filtered array

// return the filtered array

function filter_list(l) {
  return l.filter((item) => typeof item === "number");
}

// time complexity is O(n);
