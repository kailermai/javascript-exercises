const reverseString = function (string) {
  let stringArray = [];
  let stringLen = string.length;
  for (let i = 0; i < stringLen; i++) {
    stringArray[i] = string[i];
  }
  let newStringArray = [];
  for (let i = 0; i < stringLen; i++) {
    newStringArray[i] = stringArray.pop();
  }
  return newStringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
