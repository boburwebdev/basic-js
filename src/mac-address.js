const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const VALID_VALUES = "0123456789abcdef";

  const groups = n.split("-");

  for (let i = 0; i < groups.length; i++) {
    if (
      groups[i].length !== 2 ||
      VALID_VALUES.indexOf(groups[i][0].toLowerCase()) === -1 ||
      VALID_VALUES.indexOf(groups[i][1].toLowerCase()) === -1
    ) return false;
  }

  return true;
}

module.exports = {
  isMAC48Address
};
