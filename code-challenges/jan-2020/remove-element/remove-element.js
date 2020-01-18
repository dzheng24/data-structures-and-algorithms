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


// method using splice method
function removeElement2(nums, val) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
}

// method using the "index" method
function removeElement3(nums, val) {
  let index = 0;
  for (let i = 0 ; i < nums.length - 1; i++) {
    if (nums[i] !== val) {
      nums[index++] = nums[i]
    }
  }
  return index;
}



// console.log(removeElement([3,2,2,3], 3))

console.log(removeElement2([3,2,2,3], 3))

module.exports = {
  removeElement,
  removeElement2,
  removeElement3
}



