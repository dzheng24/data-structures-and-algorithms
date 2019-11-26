'use strict';

const Hashtable = require('../hashtable/hashtable');


function repeatedWord (str) {
  let newList = str.toLowerCase();
  console.log(newList);
  let newHash = new Hashtable(1000);

  for (let i = 0; i < newList.length; i++) {
    newHash.add(newList[i], 'none');
    for (let j = 0; j < newHash.buckets.length; i++) {
      if (newHash.contains(newList[i])) {
        return newList[i];
      }
    }
  }
  return null;
}




console.log(repeatedWord('it was a was great day'));

