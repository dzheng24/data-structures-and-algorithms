'use strict';

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (needle === '') {
    return 0;
  }
  let pointer2 = needle.length;
  for (let pointer1 = 0; pointer1 <= haystack.length - needle.length; pointer1++) {
    let substring = haystack.substring(pointer1, pointer2);
    console.log(substring);
    if (substring === needle) {
      return pointer1;
    }
    pointer2++;
  }
  return -1;
}

strStr('Hello', 'll');

module.exports = {
  strStr
}
