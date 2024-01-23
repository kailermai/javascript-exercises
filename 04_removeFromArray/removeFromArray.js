const removeFromArray = function (array, ...values) {
  for (const value of values) {
    let indexValue = array.indexOf(value);
    if (indexValue === -1) {
      continue;
    } else {
      array.splice(indexValue, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
