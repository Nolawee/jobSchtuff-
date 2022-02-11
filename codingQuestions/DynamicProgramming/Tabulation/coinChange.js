const coinChange = (coins, amount) => {
    const table = Array(amount + 1).fill(0);

    table[0] = 1;

    // for(let i = 0; i <= amount; i++) {
    //     for(let coin of coins) {
    //         if(coin <= i) {
    //             table[i] = Math.min(table[i], 1 + table[i - coin]);
    //         }
    //     }
    // }

    // for(let i = 0; i < table.length; i++) {
    //     for(let coin of coins) { 
    //         if(i >= coin) {
    //             console.log(i);
    //             const remainder = i - coin;
    //             // console.log('table[i] ' + table[i])
    //             // console.log('table[remainder] ' + table[remainder])
    //             table[i] += table[remainder];
    //         }
    //     }
    // }

    for(let coin of coins) {
        for(let i = coin; i < table.length; i++) {
            console.log('i ' + i)
            console.log('table[i] ' + table[i])
            const remainder = i - coin;
            console.log('table[remainder] ' + table[remainder])
            table[i] += table[remainder];
        }
    }

    return table[amount];
}

console.log(coinChange([1, 2, 3], 4));

// console.log(coinChange([2, 5, 3, 6], 10));