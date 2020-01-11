'use strict';

function reverse(num) {
  let multiplier = 1;
  if (num < 0) {
    multiplier = -1;
    num = Math.abs(num);
  }
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = parseInt(num / 10);
  }
  return reversed * multiplier;
}

console.log(reverse(1534236469));

module.exports = {
  reverse
}
