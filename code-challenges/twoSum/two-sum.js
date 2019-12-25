'use strict';

function twoSum (nums, target) {
  const previousValues = {};
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const neededValue = target - currentValue;
    const index2 = previousValues[neededValue];
    if (index2) {
      return [index2, i];
    } else {
      previousValues[currentValue] = i;
    }
  }
}

console.log(twoSum([1,3,4,5], 4));

module.exports = twoSum;

