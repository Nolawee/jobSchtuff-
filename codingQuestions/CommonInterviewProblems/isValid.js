const isValid = (s) => {
    
    const stack = [];
    const mapping = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    if(s.length === 0) return true;

    if(Object.values(mapping).find(ch => ch === s.charAt(0))) return false;
    
    for(let c of s) {
        if(mapping[c] !== undefined) {
            stack.push(c);
        }else if((stack.length > 0) && mapping[c] === undefined) {
            stack.pop();
        } else {
            return false
        }
    }


    return stack.length === 0;
}


console.log(isValid('()'));
console.log(isValid('[{)'));
console.log(isValid('}}}}}'));
console.log(isValid(''))
console.log(isValid('(){}[][](){}'))
// console.log(isValid(''));
// console.log(isValid('({({})})'))
// console.log(isValid('(){}{{}}[]'))
// console.log(isValid(''))