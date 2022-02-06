class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const depthFirstValues = (root) => {
//     if(root === null) return [];
//     const arrayReturn = [];
//     const stack = [ root ]; // push pop
//     while (stack.length > 0) {
//         const current = stack.pop()
//         arrayReturn.push(current.val);
//         //push the one you want last first (ie you want the right last)
//         //stacks are FILO
//         if(current.right !== null) stack.push(current.right);
//         if(current.left !== null) stack.push(current.left);
//     }

//     console.log(arrayReturn);
// }

const depthFirstValues = (root) => {
    if(root === null) return [];
    const leftValues = depthFirstValues(root.left); // [b, d, e]
    const rightValues = depthFirstValues(root.right); // [c, f]
    return [root.val, ...leftValues, ...rightValues];
}



const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

depthFirstValues(a);