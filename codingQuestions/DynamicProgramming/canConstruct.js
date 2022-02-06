const canConstruct = (target, wordBank) => {
    if(target === '') return true;

    for (let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank) === true) {
                return true;
            }
        }
    }

    return false;
};

const canConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target]
    if(target === '') return true;

    for (let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank) === true) {
                memo[target] = true
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
};


console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))