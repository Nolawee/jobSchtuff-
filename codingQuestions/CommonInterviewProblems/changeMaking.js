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

    return resultOutside.reduce((a, b) => a.length <= b.length ? a : b).length;
}

console.log(makeChange(11, [1, 2, 5]));