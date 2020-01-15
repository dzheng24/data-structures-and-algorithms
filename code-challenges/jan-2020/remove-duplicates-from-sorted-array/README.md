# Remove Duplicates from Sorted Array

https://leetcode.com/problems/remove-duplicates-from-sorted-array/

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

```
Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.

Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
```

The approach is similar to the one I did yesterday: move zeroes to the end of the array. I made an index variable to keep track of the length of adjusted array. Instead of starting the index variable at 0, I start at 1, because I know the the very first of number in the array has to be unique.

Time Complexity: O(n)
Space Complexity: O(1)

Helpful Source:
https://www.youtube.com/watch?v=zIHe2V5Py3U