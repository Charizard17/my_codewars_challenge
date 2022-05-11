// INSTRUCTIONS
// Credit Card Mask

// Usually when you buy something, you're asked whether your credit card
// number, phone number or answer to your most secret question is still correct.
// However, since someone could look over your shoulder, you don't want that
// shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the
// last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

// SOLUTION
// firstly check length of input, whether is less or equal than four
// if so, return it

// if length is more than four, then slice the input into two parts

// with replace all method, turn first part all into ####'s
// But time complexity of replace is O(n),
// thats why to make it sure using array map is better in this case

// concatenate these two parts, and return it

function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  }

  let maskedString = cc.slice(0, cc.length - 4);
  let maskedStringArr = [];
  for (let i = 0; i < maskedString.length; ++i) {
    maskedStringArr.push("#");
  }

  // maskedString = maskedString.replace(/[-*!?/.:,;+*\(=&%$€^)a-zA-Z0-9]/g, '#');

  return maskedStringArr.join("") + cc.slice(cc.length - 4);
}

// time complexity is O(n)
