const isValid = (s) => {
    const stack = [];
    const mapping = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for(let c of s) {
        console.log(mapping[c]);
        if(c === '(' || c === '{' || c === '[') {
            stack.push(c);
        }

        if(c === ')' || c === '}' || c === ']') {
            stack.pop();
        }
    }


    return stack.length === 0;
}


console.log(isValid('()'));
// console.log(isValid(''));
// console.log(isValid('({({})})'))
// console.log(isValid('(){}{{}}[]'))
// console.log(isValid(''))