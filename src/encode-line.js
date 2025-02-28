const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let prevChar = str[0];
  let newStr = "";
  for (let i = 1; i < str.length; i++) {
    // if (str[i] !== str[i - 1]) {
    //   newStr += count === 1 ? str[i - 1] : count + str[i - 1];
    // } else {
    //   count += 1;
    // }

    if (prevChar === str[i]) {
      count++;
    } else {
      if (count > 1) {
        newStr += count + prevChar;
        count = 1;
      } else {
        newStr += prevChar;
      }
    }

    prevChar = str[i];

    if (i === str.length - 1) {
      if (count > 1) {
        newStr += count + prevChar;
        count = 1;
      } else {
        newStr += prevChar;
      }
    }
  }
  return newStr;
}


module.exports = {
  encodeLine
};
