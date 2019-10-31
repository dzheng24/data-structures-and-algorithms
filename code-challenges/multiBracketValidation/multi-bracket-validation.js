'use strict';

// source: https://medium.com/@paulrohan/parenthesis-matching-problem-in-javascript-the-hacking-school-hyd-7d7708278911

const multiBracketValidation = (str) => {
  let newStr = str.replace(/[a-z]/gi, '');
  let openingBrackets = []; // empty array to hold the opening brackets
  let bracketStandard = { // setting an object to have the standards for the brackets
    '(' : ')',
    '[' : ']',
    '{' : '}'
  };

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === '(' || newStr[i] === '[' || newStr[i] === '{') {
      openingBrackets.push(newStr[i]);
    }
    else {
      let closingBracket = openingBrackets.pop();
      if (newStr[i] !== bracketStandard[closingBracket]) {
        return false;
      }
    }
  }
  return true;
}

console.log(multiBracketValidation('())))[])))'));
console.log(multiBracketValidation('{[j][]}'));

module.exports = multiBracketValidation;
