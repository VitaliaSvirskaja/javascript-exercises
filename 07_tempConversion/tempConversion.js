const ftoc = function (fahrenheit) {
    const result = (fahrenheit - 32) * (5 / 9);
    return round(result);
};

const ctof = function (celsius) {
    const result = (celsius * (9 / 5)) + 32;
    return round(result);
};

function round(number) {
    return Math.round(number * 10) / 10;
}

// Do not edit below this line
module.exports = {
    ftoc,
    ctof,
    round
};
