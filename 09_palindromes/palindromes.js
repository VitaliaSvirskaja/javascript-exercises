const palindromes = function (string) {
    const splitString = string.split('');
    const reverseString = splitString.reverse();
    const joinString = reverseString.join('');
    return joinString === string;

};

// Do not edit below this line
module.exports = palindromes;
