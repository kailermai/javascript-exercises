const repeatString = function (string, num) {
  let returnstring = "";
  if (num < 0) {
    return "ERROR";
  }

  for (let i = 0; i < num; i++) {
    returnstring += string;
  }
  return returnstring;
};

// Do not edit below this line
module.exports = repeatString;
