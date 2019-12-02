'use strict';

//Algorithm
// 1. Create an empty object
// 2. looping through the array of strings
// 3. look for characters that have a space or punctuation following it
// 4. compare that word against the object
//  -if the word does not exist, push that word into the object
//  -if the word exist, return the word



function repeatedWord (str) {
  let newList = str.toLowerCase();
  let wordObject = {};
  let word = '';
  for (let i = 0; i < newList.length; i++) {
    word += newList[i]
    if (newList[i] === ' ') {
      // console.log(word);
      if (wordObject[word.replace(/[,']/,'')]) {
        return word.replace(/\s/,'');
      } else {
        wordObject[word.replace(/[,']/,'')] = true;
        word = '';
      }
    }
  }
  return false;
}

module.exports = repeatedWord;


// console.log(repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York'));

