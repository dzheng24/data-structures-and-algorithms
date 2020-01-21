/* eslint-disable indent */
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

function build(result) {
  let builder = new Array();
  let p = 0;
  while (p < result.length) {
    let val = result.charAt(p);
    let count = 0;

    while (p < result.length && result.charAt(p) === val) {
      p++;
      count++;
    }
    builder.push(count);
    builder.push(val);
  }
  return builder.join('');
}

console.log(countAndSay(8));



module.exports = {
  countAndSay
}
