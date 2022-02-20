const reverseString = function(input) {
    const splitInput = input.split('');
    const reversedInput = splitInput.reverse();
    return reversedInput.join('');
}

// Do not edit below this line
module.exports = reverseString;
