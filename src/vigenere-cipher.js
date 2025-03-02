const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const LATIN_LETTERS = "abcdefghijklmnopqrstuvwxyz";

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this._isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!")
    }

    let encryptedMessage = "";
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const letterIndex = LATIN_LETTERS.indexOf(message[i].toLowerCase());
      const keyChar = key[keyIndex % key.length];
      const keyLetterIndex = LATIN_LETTERS.indexOf(keyChar.toLowerCase());

      if (letterIndex === -1) {
        encryptedMessage += message[i];
      } else {
        let encryptedLetterIndex = letterIndex + keyLetterIndex;
        if (encryptedLetterIndex > 25) {
          encryptedLetterIndex = encryptedLetterIndex - 26;
        }

        encryptedMessage += LATIN_LETTERS[encryptedLetterIndex];
        keyIndex++;
      }
    }

    return encryptedMessage.toUpperCase();
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!")
    }

    let decryptedMessage = "";
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const letterIndex = LATIN_LETTERS.indexOf(encryptedMessage[i].toLowerCase());
      const keyChar = key[keyIndex % key.length];
      const keyLetterIndex = LATIN_LETTERS.indexOf(keyChar.toLowerCase());

      if (letterIndex === -1) {
        decryptedMessage += encryptedMessage[i];
      } else {
        let encryptedLetterIndex = letterIndex - keyLetterIndex + 26;
        if (encryptedLetterIndex < 0) {
          encryptedLetterIndex = encryptedLetterIndex + 25;
        } else if (encryptedLetterIndex > 25) {
          encryptedLetterIndex = encryptedLetterIndex - 26;
        }

        decryptedMessage += LATIN_LETTERS[encryptedLetterIndex];
        keyIndex++;
      }
    }

    return decryptedMessage.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
