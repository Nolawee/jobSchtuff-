const countConstruct = (target, wordBank) => {
    const table = new Array(target.length + 1).fill(0)

    table[0] = 1;


    for(let i = 0; i < table.length; i++){
        for(let word of wordBank) {
            if(target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            } 
        }
    }

    return table[target.length]
    
}

// m = target
// n = wordBank.length

//O(m*m*n) time
//O(m) space

console.log(countConstruct('purple', ['purp', 'p', 'ur','le', 'purpl'])); // 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd','def', 'abcd'])); // 1
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'eee', 'eeee','eeeee', 'eeeeee'])); // 0