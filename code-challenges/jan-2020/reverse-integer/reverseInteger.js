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
  let answer = reversed * multiplier;
  if (answer < Math.pow(2, 31) * -1 || answer > Math.pow(2, 31) -1) {
    return 0;
  }
  return answer;
}

console.log(reverse(1534236469));

module.exports = {
  reverse
}
