const add = function(num1, num2) {
	return (num1 + num2);
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arrayNum) {
	let total = 0;
  arrayNum.forEach(num => {
    total += num;
  });
  return total;
};

const multiply = function(arrayNum) {
  let total = 1;
  arrayNum.forEach(num => {
    total *= num;
  });
  return total;
};

const power = function(num, power) {
  let total = num;
	for (let i = 1; i < power; i++) {
    total *= num;
  }
  return total;
};

const factorial = function(num) {
	if (num === 0) {
    return 1
  }
  else {
    let total = 1;
    for (let i = 2; i <= num; i++) {
      total *= i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
