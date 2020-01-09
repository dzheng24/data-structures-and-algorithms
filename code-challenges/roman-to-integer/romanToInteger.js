'use strict';

function romanToInteger(string) {
  const translator = {};
  translator['I'] = 1;
  translator['V'] = 5;
  translator['X'] = 10;
  translator['L'] = 50;
  translator['C'] = 100;
  translator['D'] = 500;
  translator['M'] = 1000;

  if (string.length === 1) {
    return translator[string]
  }
  else {

    let result = 0;

    for (let i = 0; i < string.length; i++) {
      let current = translator[string[i]];
      // console.log(result, current, i, string.length);
      if (i + 1 < string.length) {

        let next = translator[string[i + 1]];

        if (current >= next) {

          result += current;

        }
        else {
          result += (next - current);
          i++;
        }
      }
      else {
        result += current;
      }
    }
    return result;
  }
}


console.log(romanToInteger('XIV'));

module.exports = {
  romanToInteger
}
