const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const encodeButton = document.getElementById('encode');
const decodeButton = document.getElementById('decode');
const inputElement = document.getElementById('input');
const keyElement = document.getElementById('key');
const outputElement = document.getElementById('output');

encodeButton.addEventListener('click', function() {
  handleCipherOperation('encode');
});

decodeButton.addEventListener('click', function() {
  handleCipherOperation('decode');
});

function handleCipherOperation(operation) {
    const inputText = inputElement.value;
    const key = parseInt(keyElement.value, 10);
  
    const result = caesarCipher(inputText, key, operation);
    outputElement.value = result;
  }
  
  // Function to perform the Caesar cipher
function caesarCipher(text, key, operation) {
    return text.replace(/[a-zA-Z]/g, function(char) {
      const isUpperCase = char === char.toUpperCase();
      const charLower = char.toLowerCase();
      const index = alphabet.indexOf(charLower);
  
      if (index === -1) {
        return char; // non alphabetic chars stay the same 
      }
  
      // avoid negative index
      const positiveKey = key < 0 ? key % 26 + 26 : key;
  
      let newIndex;
      if (operation === 'encode') {
        newIndex = (index + positiveKey) % 26;
      } else {
        newIndex = (index - positiveKey + 26) % 26;
      }
  
      const shiftedChar = alphabet[newIndex];
  
      return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
    });
  }
  
