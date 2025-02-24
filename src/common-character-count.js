const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let countCommon = 0;
  let newOne = "";
  let newTwo = "";

  let i = 0;

  while (i < s1.length) {
    const s2Idx = s2.indexOf(s1[i]);
    i++;
    if (s2Idx !== -1) {
      newOne = s1.slice(0, i === 0 ? 0 : i - 1) + s1.slice(i);
      newTwo = s2.slice(0, s2Idx) + s2.slice(s2Idx + 1);
      s1 = newOne;
      s2 = newTwo;
      countCommon += 1;
      i = 0;
    }
  }

  return countCommon;
}

module.exports = {
  getCommonCharacterCount
};
