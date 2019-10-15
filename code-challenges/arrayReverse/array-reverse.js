/* eslint-disable for-direction */
function reverseArray (arr) {
  let newArr = [];
  for (let i = arr.length-1; i >= 0; i--){
    newArr.push(arr[i]);
  }
  console.log(newArr);
  return newArr;
}

console.log(reverseArray ([1,2,3,4,5]));
