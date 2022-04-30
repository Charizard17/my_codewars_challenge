// INSTRUCTIONS
// Prefix Hierarchy

// Given a list of names, determine the number of names in that list for which a given query string is a prefix.
// The prefix must be at least 1 character less than the entire name string.

// Example
// names = ['jackson', 'jacques', 'jack']
// query = ['jack']

// The complete query string 'jack' is a prefix of jackson, but not of jacques or jack.
// The prefix cannot contain the entire name string, so 'jack' does not qualify.Example

// Function Description
// Complete the function findCompletePrefixes in the editor below.
// The function must return an array of integers that each denotes the number of names strings
// for which a query string is a prefix.

// findCompletePrefixes has the following parameter(s):
//     string names[n] an array of name strings
//     string query[q] an array of query strings

// Returns:
//     int[q]: each value[i] is the answer to query[i]

// Constraints
//     # 1 <= n <= 20000
//     # 2 <= length of names[i], query[i] <= 30
//     # 1 <= sum of the lengths of all names[i] <= 5x10^5
//     # 1 <= q <= 200

// SOLUTION

function findCompletePrefixes(names, query) {
  // Write your code here
  var answerArray = [];
  for (var i = 0; i < query.length; ++i) {
    var containsQuery = 0;
    for (var j = 0; j < names.length; ++j) {
      if (names[j].startsWith(query[i]) && names[j] != query[i]) {
        ++containsQuery;
      }
    }
    answerArray.push[containsQuery];
  }
  return answerArray;
}

// time complexity is O(n^2)

// –––––––––––––––––––––––––

// filter the names array depending on following conditions

// name starts with query and name does not equal to query

// return the new filtered names array

function findCompletePrefixes(names, query) {
    return names.filter(name => name.startsWith(query) == true && name != query);
}

// time complexity is O(n)