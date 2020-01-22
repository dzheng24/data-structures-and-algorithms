'use strict';

/**
 * @param {number} n
 * @return {string}
 */


function countAndSay(n) {
  if(n <= 0) return '-1';
  let result = '1';
  for (let i = 1; i < n; i++) {
    result = build(result);
  }
  return result;
}

function build(lastResult) {
  let stringBuilder = new Array();
  let p = 0;
  while (p < lastResult.length) {
    let val = lastResult.charAt(p);
    let count = 0;
    while (p < lastResult.length && lastResult.charAt(p) === val) {
      p++;
      count++;
    }
    stringBuilder.push(count);
    stringBuilder.push(val);
  }
  return stringBuilder.join('');
}

module.exports = {
  countAndSay
}
