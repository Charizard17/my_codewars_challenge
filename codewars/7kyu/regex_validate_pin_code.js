// INSTRUCTIONS
// Regex validate PIN code

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything
// but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// SOLUTION
// since this function validate pin code
// input validation is not necessary

// get input and make an if check
// return true or false depends on the validation

function validatePIN(pin) {
  let reg = new RegExp("^[0-9]+$");
  if (reg.test(pin) == true && (pin.length == 4 || pin.length == 6)) {
    return true;
  } else {
    return false;
  }
}
