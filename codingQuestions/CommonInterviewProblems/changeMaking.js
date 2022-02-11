const makeChangeOutside = (amount, coins, memo={}) => {
    if (amount in memo) return memo[amount];
    if (amount === 0) return [[]]

    let result = [];

    for (let coin of coins) {
        if (amount > 0) {
            const remainder = amount - coin;
            const remainderChange = makeChangeOutside(remainder, coins);
            const amountChange = remainderChange.map((rem) => [coin, ...rem]);
            result.push(...amountChange);
        }
    }
    memo[amount] = result;
    return result;
}

const makeChange = (amount, coins) => {

    let resultOutside = makeChangeOutside(amount, coins);

    resultOutside = resultOutside.map(arr => arr.sort());

    resultOutside = [...new Set(resultOutside.map(e => JSON.stringify(e)))].map(e => JSON.parse(e)) // [[1,20]]

    return resultOutside.length;
}




console.log(makeChange(69, [25, 27, 40, 38, 17, 2, 28, 23, 9, 43, 18, 49, 15, 24, 19, 11, 1, 39, 32, 16, 35, 30, 48, 34, 20, 3, 6, 13, 44]));