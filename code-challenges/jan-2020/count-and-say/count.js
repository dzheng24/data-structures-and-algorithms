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
    console.log('i is ', i)
    result = build(result);
  }
  console.log('final result is ', result)
  return result;
}

function build(result) {
  console.log('the result currently is ', result)
  let stringBuilder = new Array();
  let p = 0;
  while (p < result.length) {
    console.log('p is ', p + ' and result is ', result)
    let val = result.charAt(p);
    let count = 0;

    while (p < result.length && result.charAt(p) === val) {
      p++;
      count++;
    }
    stringBuilder.push(count);
    stringBuilder.push(val);
  }
  console.log('builder is ', stringBuilder)
  return stringBuilder.join('');
}

console.log(countAndSay(4));



module.exports = {
  countAndSay
}
