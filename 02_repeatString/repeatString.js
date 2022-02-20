const repeatString = function (input, numberOfRepeats) {
    if(numberOfRepeats<0){
        return "ERROR"
    }
    let output = "";
    for (let i = 0; i < numberOfRepeats; i++) {
        output += input
    }
     return output;

};

// Do not edit below this line
module.exports = repeatString;
