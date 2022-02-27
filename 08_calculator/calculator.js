const add = function(firstNumber, secondNumber) {
	return firstNumber+secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber-secondNumber;
};

const sum = function(array) {
	return array.reduce(
        (previousValue, currentValue) => previousValue +currentValue,0)
};

const multiply = function(array) {
  if (array.length === 0) return 0 ;
return array.reduce(
    (previousValue, currentValue)=> previousValue * currentValue)
};

const power = function(...array) {
  return array.reduce(
      (previousValue, currentValue) => previousValue ** currentValue)
};

const factorial = function(number) {
  if (number === 0)
    return 1;
  else
    return (number * factorial(number - 1));
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
