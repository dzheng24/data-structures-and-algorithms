# Quick Sort 
  Quick sort, similar to merge sort, also uses divide and conquer. Unlike merge sort,  there are a lot more work goes into dividing the list within quick sort. 

## Pseudocode 
```
  algorithm quickSort(arr, left, right)
    if left < right
      // partition the array by setting the position of the pivot value
      let position = partition(arr, left, right)
      // sort the left
      quickSort(arr, left, position - 1)
      // sort the right
      quickSort(arr, position + 1, right)
  
  algorithm partition(arr, left, right)
    
    // set a pivot value as a point of reference
    let pivot = arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    let low = left - 1 
    loop from left to right
      if arr[i] <= pivot
        low++
        swap(arr, i, low)
    
    // place the value of the pivot location in the middle
    // all numbers smaller than the pivot are on the left, larger on the right
    swap(arr, right, low + 1)
    // return the pivot index point 
    return low + 1 

  algorithm swap(arr, i, low) 
    let temp = arr[i]
    arr[i] = arr[low]
    arr[low] = temp
```

## Trace 
* Sample Array `[8, 4, 23, 42, 16, 15]`

- First pass: 
  * array: `[8, 4, 23, 42, 16, 15]`
  * left: 0, right: 5
  * we compare the values from left index to index 5, which is 15. If they are bigger than 15, we move them to the right. Result is `[8, 4, 15, 42, 16, 23]`.

- Second pass:
  * array: `[8, 4, 15, 23, 42, 16, 23]`
  * left: 0, right: 1
  * we compare the values from left index to index 1, which is 4. If they are bigger than 4, we move them to the right. Result is `[4, 8, 15, 42, 16, 23]`.

- Third pass:
  * array: `[4, 8, 15, 42, 16, 23]`
  * left: 3, right: 5
  * we compare the values from left index to index 5, which is 23. If they are bigger than 23, we move them to the right. Result is `[4, 8, 15, 16, 23, 42]`.

## Efficiency
- time: O(nLogn), because of the master theorem. 
- space: O(log(n)), because it calls itself on the order of log(n) times. 

