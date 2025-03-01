const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const convertedStr = typeof str === "string" ? str : String(str);

  let finalStr = "";
  let additionStr = "";

  if ("addition" in options) {
    const convertedAddition = typeof options.addition === "string" ? options.addition : String(options.addition);

    if (options.additionRepeatTimes) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        let divider = i === options.additionRepeatTimes - 1 ? "" : "|";

        if (options.additionSeparator) {
          divider = i === options.additionRepeatTimes - 1 ? "" : options.additionSeparator;
        }
        additionStr += convertedAddition + divider;
      }
    } else {
      additionStr = convertedAddition;
    }
  }

  if (options.repeatTimes) {
    for (let j = 0; j < options.repeatTimes; j++) {
      let divider = j === options.repeatTimes - 1 ? "" : "+";

      if (options.separator) {
        divider = j === options.repeatTimes - 1 ? "" : options.separator
      }

      finalStr += convertedStr + additionStr + divider;
    }
  } else {
    finalStr += convertedStr + additionStr;
  }

  return finalStr;
}

module.exports = {
  repeater
};
