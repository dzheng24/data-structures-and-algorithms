'use strict';

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const inputNumber = parseInt(digits.join(''));
  const newNumber = inputNumber + 1;
  const newStringNumberArray = newNumber.toString().split('');
  const n = newStringNumberArray.length;
  let resultArray = [];
  for (let i = 0; i < n; i++) {
    let popped = newStringNumberArray.pop();
    popped = parseInt(popped);
    resultArray.unshift(popped);
  }
  return resultArray;
};


console.log(plusOne([2,3,4]));

module.exports = {
  plusOne
}
