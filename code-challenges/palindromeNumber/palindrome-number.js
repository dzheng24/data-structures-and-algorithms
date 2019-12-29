'use strict';

// this is a slow way of doing things (converting number to string)

// function isPalindrome (num) {
//   if (typeof(num) !== 'number') {
//     return 'please enter an integer'
//   }
//   let strNum = num.toString()
//   let resultStr = '';
//   for (let i = strNum.length - 1; i >= 0; i--) {
//     resultStr += strNum[i]
//   }
//   if (strNum === resultStr) {
//     return true
//   } else {
//     return false
//   }
// }


// number based reversal method

function isPalindromeTwo (num) {
  if (num < 0) {
    return false
  }
  let input = num;
  let reversed = 0;
  while (num > 0) {
    reversed = (reversed * 10) + (num % 10);
    console.log('reversed is ' + reversed)
    num = parseInt (num/10);
    console.log('num is ' + num)
  }
  if (reversed === input) {
    return true;
  } else {
    return false;
  }
}

isPalindromeTwo(1234321);

module.exports = {
  isPalindromeTwo
}


