const allConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if(target === '') return [[]];


    const result = [];

    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map((way) => [word, ...way]);
            // memo[target] = [...targetWays]
            result.push(...targetWays);
        }
    }
    memo[target] = result
    return result;
}


console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'eee', 'eeee', 'eeeee', 'eeeeee']));