// INSTRUCTIONS
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// SOLUTION
/**
 * @param {string} s
 * @return {number}
 */

// first check if the six instances exist

// check the rest string

// output

var romanToInt = function(s) {
    
    // lets detect if six instances in our string exist
    let cm = (s.match(/CM/g) || []).length; // 900
    let cd = (s.match(/CD/g) || []).length; // 400
    let xc = (s.match(/XC/g) || []).length; // 90
    let xl = (s.match(/XL/g) || []).length; // 40
    let ix = (s.match(/IX/g) || []).length; // 9
    let iv = (s.match(/IV/g) || []).length; // 4
    
    // delete six instances from the string
    s = s.replace('CM', '').replace('CD', '').replace('XC', '').replace('XL', '').replace('IX', '').replace('IV', '');
    
    // lets detect other numbers and counts as well
    let m = (s.match(/M/g) || []).length; // 1000
    let d = (s.match(/D/g) || []).length; // 500
    let c = (s.match(/C/g) || []).length; // 100
    let l = (s.match(/L/g) || []).length; // 50
    let x = (s.match(/X/g) || []).length; // 10
    let v = (s.match(/V/g) || []).length; // 5
    let i = (s.match(/I/g) || []).length; // 1
    
    // calculate total value
    let totalValue = 1000*m + 900*cm + 500*d + 400*cd + 100*c + 90*xc + 50*l + 40*xl + 10*x + 9*ix + 5*v + 4*iv + 1*i;
    
    return totalValue;
};