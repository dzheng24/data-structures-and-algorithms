'use strict';


function insertShiftArray (arr, value) {
  let newIndex = Math.floor((arr.length+1)/2);
  let newArray = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === newIndex){
      newArray[newIndex] = value;
      newArray.push(arr[i]);
    }
    // if (arr[i] > newIndex){
    //   newArray[i] = newArray[i+1]
    // }
    return newArray;
  }
}

describe('testing insertShiftArray', () => {
  test('It should insert the value into the middle of the array', () => {
    expect(insertShiftArray([2,4,6,8],5).toStrictEqual([2,4,5,6,8]));
    expect(insertShiftArray([4,8,15,23,42],16).toStrictEqual([4,8,15,16,23,42]));
  });
});


console.log(insertShiftArray([2,4,6,8], 5));
