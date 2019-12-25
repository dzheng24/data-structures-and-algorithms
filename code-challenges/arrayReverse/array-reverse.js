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

function reverseString_slow(str) {
  console.log(str);
  let newArrStr = str.split('');
  console.log(newArrStr);
  let reversedArrStr = newArrStr.reverse();
  console.log(reversedArrStr);
  let reversedStr = reversedArrStr.join('');
  console.log (reversedStr);
}

reverseString_slow('hello');

function reverseString_fast(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result;
}

reverseString_fast('skateboard');
