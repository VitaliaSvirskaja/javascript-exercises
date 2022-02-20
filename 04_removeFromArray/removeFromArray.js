const removeFromArray = function(input,...beRemoved) {
  return input.filter(element => !beRemoved.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
