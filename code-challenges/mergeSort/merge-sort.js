function mergeSort(array) {
  if(array.length < 2) {
    return array;
  }
  if(array.length > 1) {
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  let array = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  return array.concat(left.slice()).concat(right.slice());
}

let arr = [8,4,23,42,16,15];

console.log(mergeSort(arr));

module.exports = {mergeSort, merge};

//source: https://initjs.org/merge-sort-in-javascript-4614386c1374




