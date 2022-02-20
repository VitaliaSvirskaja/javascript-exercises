const sumAll = function (from, to) {
    if ((from < 0) || (to < 0)) return "ERROR";
    if (typeof from !== "number"
        || typeof to !== "number") return "ERROR";


    let finalSum = 0;
    const start = Math.min(from, to);
    const end = Math.max(from, to);
    for (let i = start; i <= end; i++) {
        finalSum += i
    }

    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
