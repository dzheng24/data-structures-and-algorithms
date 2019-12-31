'use strict';

function singleNumber (nums) {
  const number = {};
  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    if (!number[currentNumber]) {
      number[currentNumber] = true
    } else {
      delete number[currentNumber]
    }
  }
  return parseInt(Object.keys(number));
}

module.exports = {
  singleNumber
}
