# Move Zeroes
https://leetcode.com/problems/move-zeroes/

Given an array `nums`, write a function to move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

```
Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```

Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

How I solved it:
  - create an "index" variable, go through the array, if the value is not 0, assign the "index" of the array to be that non-zero number.

    `nums[index++] = nums[i]`
  
  - go through the array a second time, now starting at the "index", assign the rest of the values to be zeroes. 

Time Complexity: O(n)
Space Complexity: O(1)


Source:
https://leetcode.com/problems/move-zeroes/

