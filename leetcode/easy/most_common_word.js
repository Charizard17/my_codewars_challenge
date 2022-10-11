// INSTRUCTIONS
// Most Common Word

// Given a string paragraph and a string array of the banned words banned,
// return the most frequent word that is not banned. It is guaranteed there is
// at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

// Example 1:

// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation:
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"),
// and that "hit" isn't the answer even though it occurs more because it is banned.
// Example 2:

// Input: paragraph = "a.", banned = []
// Output: "a"

// Constraints:

// 1 <= paragraph.length <= 1000
// paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
// 0 <= banned.length <= 100
// 1 <= banned[i].length <= 10
// banned[i] consists of only lowercase English letters.

// SOLUTION
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

// convert input to lower case string
// remove symbols from the paragraph
// remove banned words from the paragraph
// split paragraph string into an array
// sort the array by word frequency
// first indexed word will be the not banned unique one

var mostCommonWord = function (paragraph, banned) {
  const pattern = /[!?',;.]+/g;
  const pureParagraph = paragraph.toLowerCase().replace(pattern, " ");
  let words = pureParagraph.split(" ");
  for (var i = 0; i < banned.length; i++) {
    words = words.filter((e) => e != banned[i] && e != "");
  }
  const sortedWords = sortByFrequency(words);
  return sortedWords[0];
};

function sortByFrequency(array) {
  var frequency = {};

  array.forEach(function (value) {
    frequency[value] = 0;
  });

  var uniques = array.filter((value) => ++frequency[value] == 1);

  return uniques.sort((a, b) => frequency[b] - frequency[a]);
}

// Time complexity looks like O(n2)
