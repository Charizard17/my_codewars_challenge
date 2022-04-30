// INSTRUCTIONS
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// SOLUTION
// remove vowels using js replace method

// removeAll ??? tried to use it but didnt worke

function disemvowel(str) {
  let value = str.replace(/a/g, "").replace(/A/g, "");
  value = value.replace(/e/g, "").replace(/E/g, "");
  value = value.replace(/i/g, "").replace(/I/g, "");
  value = value.replace(/o/g, "").replace(/O/g, "");
  value = value.replace(/u/g, "").replace(/U/g, "");
  return value;
}

// a better approach
function disemVowel(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}
