'use strict';

function twoSum (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1]
    } else if (sum < target) {
      left ++;
    } else {
      right --;
    }
  }
  return 'numbers in the array do not add up to the target';
}

module.exports = {
  twoSum
}
