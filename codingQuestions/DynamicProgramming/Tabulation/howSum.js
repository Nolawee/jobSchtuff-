const howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null)
    table[0] = [];

    for(let i = 0; i <= table.length; i ++) {
        for(let number of numbers) {
            if(table[i] !== null) {
                if(i + number < table.length) {
                    table[i + number] = [...table[i], number]
                }
            }
        }
    }

    return table[targetSum];
}

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(7, [2, 3, 5]));
console.log(howSum(300, [7, 14]));