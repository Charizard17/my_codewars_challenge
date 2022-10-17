// INSTRUCTIONS
// RGB To Hex Conversion

// The rgb function is incomplete. Complete it so that passing in RGB decimal
// values will result in a hexadecimal representation being returned. Valid
// decimal values for RGB are 0 - 255. Any values that fall out of that range
// must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3
// will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

// SOLUTION
// first check if r, g and b values are between 0 and 255
// if not, edit them

// with toString method, convert them into hexadecimal values (base 16)

// if length of the converted value is 1, then add a zero at the beginning

// concat modified r,g and b strings and return it

function rgb(r, g, b) {
  r = r < 0 ? 0 : r > 255 ? 255 : r;
  g = g < 0 ? 0 : g > 255 ? 255 : g;
  b = b < 0 ? 0 : b > 255 ? 255 : b;

  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  r = r.length == 1 ? "0" + r : r;
  g = g.length == 1 ? "0" + g : g;
  b = b.length == 1 ? "0" + b : b;

  return (r + g + b).toUpperCase();
}
