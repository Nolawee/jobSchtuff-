const coinChange = (coins, amount) => {
    const table = Array(amount + 1).fill(Infinity);

    table[0] = 0;

    for(let i = 0; i <= amount; i++) {
        for(let coin of coins) {
            if(coin <= i) {
                table[i] = Math.min(table[i], 1 + table[i - coin]);
            }
        }
    }

    return table[amount] > amount ? -1 : table[amount];
}

console.log(coinChange([1, 2, 3], 4));

console.log(coinChange([2, 5, 3, 6], 10));