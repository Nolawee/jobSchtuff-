const countConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if(target === '') return 1;
    let totalCount = 0;
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);

            const numWaysForRest = countConstruct(suffix, wordBank, memo);
            memo[target] = numWaysForRest;
            totalCount += numWaysForRest;
        }
    }
    return totalCount;
}

console.log(countConstruct('purple', ['purp', 'p', 'ur','le', 'purpl']));
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd','def', 'abcd']));
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'eee', 'eeee','eeeee', 'eeeeee']));