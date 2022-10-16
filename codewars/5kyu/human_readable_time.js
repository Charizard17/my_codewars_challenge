// INSTRUCTIONS
// Human Readable Time

// Write a function, which takes a non-negative integer (seconds) as input and
// returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// SOLUTION
// input constraints are clear

// generate hours and minutes from the input value
// the rest will be our seconds value

// play a little with seconds, minutes and hours
// to fix formatting issue

// return the expected result in HH:MM:SS

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  seconds = seconds - hours * 3600;
  let minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes * 60;

  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  return hours + ":" + minutes + ":" + seconds;
}
