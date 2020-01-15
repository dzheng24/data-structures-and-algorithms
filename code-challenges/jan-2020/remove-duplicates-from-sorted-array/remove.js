'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let index = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[index++] = nums[i + 1];
    }
  }
  return index;
}

module.exports = {
  removeDuplicates
}


