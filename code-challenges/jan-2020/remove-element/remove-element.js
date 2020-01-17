'use strict';

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      counter++;
    }
    else {
      nums[i] = nums[i - counter]
    }
  }
  return nums.length - counter;
}

console.log(removeElement([3,2,2,3], 3))

module.exports = {
  removeElement
}



