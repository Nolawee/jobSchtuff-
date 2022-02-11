const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for(let i = 0; i <= table.length; i++) {
        for(let number of numbers) {
            if(table[i] !== null) {
                if(i + number < table.length) {
                    const combination = [...table[i], number]
                    // if current combo is shorter than what's in i + num
                    if(!table[i + number] || combination.length < table[i + number].length) {
                        table[i + number] = combination;
                    }
                }
            }
        }
    }

    return table[targetSum];
    
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));