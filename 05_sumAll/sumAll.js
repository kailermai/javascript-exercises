const sumAll = function (num1, num2) {
  // Check for negative numbers
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  // Check for non number parameters
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  }

  let start;
  let end;
  if (num1 < num2) {
    start = num1;
    end = num2;
  } else {
    start = num2;
    end = num1;
  }
  let sum = 0;
  for (let i = start; i < end + 1; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
