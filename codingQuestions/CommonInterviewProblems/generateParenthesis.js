const generateParentheses = (n) => {
     // global result
     const result = [];

    // recursive helper 
    const generateHelper = (l, r, s) => {
        if(l > r) return;

        if(l === 0 && r === 0) {
            result.push(s);
        }
        // add open paranthesis
        if(l > 0) {
            generateHelper(l -1, r, s + '(')
        }

        // add close paranthesis
        if(r > 0) {
            generateHelper(l, r-1, s + ')')
        }
    }

     generateHelper(n, n, '');
     return result;
}


console.log(generateParentheses(1))
console.log(generateParentheses(2))
console.log(generateParentheses(3))
console.log(generateParentheses(4))