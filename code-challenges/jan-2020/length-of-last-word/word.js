'use strict';

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (s === null) {
    return null;
  }
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      break;
    }
    length++;
  }
  return length;
};

module.exports = {
  lengthOfLastWord
}
