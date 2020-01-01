'use strict';

function isHappy (number) {
  let seen = {};
  while (number !== 1) {
    if (seen[number]) {
      return false;
    } else {
      seen[number] = true;
      number = number.toString().split('').reduce((a,b) => (a + b * b), 0)
    }
  }
  return true;
}

module.exports = {
  isHappy
}
