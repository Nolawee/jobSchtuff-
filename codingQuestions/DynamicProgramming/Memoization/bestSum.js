const bestSumBruteForce = (targetSum, numbers) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers);
        if(remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            // if the combination is shorter than the current shortest, update it
            if(shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    return shortestCombination;
};

const bestSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            memo[targetSum] = [...remainderCombination, num];
            // if the combination is shorter than the current shortest, update it
            if (shortestCombination === null || memo[targetSum].length < shortestCombination.length) {
                shortestCombination = memo[targetSum];
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
};


// m = target sum
// n = numbers.length

// Brute Force
// time: O(n^m * m)
// space: O(m^2)

// Memoized
// time: O(n * m^2)
// space: O(m^2)

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));