// INSTRUCTIONS
// Complementary DNA

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// You function receives one side of the DNA (string, except for Haskell); you need to
// return the other complementary side. DNA strand is never empty or there is no DNA at
// all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

// SOLUTION
// no need to validate input, because its never empty

// replaceAll can't be used in this function
// because replacing for the following symbol would ruin the initial input

// slice input string and save it in a variable -> array

// loop the array, check every symbol and transform it with its complements

// return complementary value as string

function DNAStrand(dna) {
  let symbols = dna.split("");
  let complementedSymbols = [];

  symbols.forEach((symbol) => {
    if (symbol == "A") {
      complementedSymbols.push("T");
    } else if (symbol == "C") {
      complementedSymbols.push("G");
    } else if (symbol == "G") {
      complementedSymbols.push("C");
    } else if (symbol == "T") {
      complementedSymbols.push("A");
    }
  });

  return complementedSymbols.join("");
}

// time complexity is O(n)
