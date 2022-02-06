class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const treeMinValue = (root) => {
//     const stack = [ root ];
//     let smallest = Infinity;
//     while (stack.length > 0) {
//         const current = stack.pop();
//         if(current.val < smallest) smallest = current.val;

//         if(current.left !== null) stack.push(current.left);
//         if(current.right !== null) stack.push(current.right);
//     }
//     return smallest;
// }

// const treeMinValue = (root) => {
//     const queue = [ root ];
//     let smallest = Infinity;
//     while (queue.length > 0) {
//         const current = queue.shift();
//         if(current.val < smallest) smallest = current.val;

//         if(current.left !== null) queue.push(current.left);
//         if(current.right !== null) queue.push(current.right);
//     }
//     return smallest;
// }

const treeMinValue = (root) => {
    if(root === null) return Infinity;
    const leftMin = treeMinValue(root.left);
    const rightMin = treeMinValue(root.right);
    // if(root.val < leftMin && root.val < rightMin) return root.val;
    // if(leftMin < rightMin && leftMin < root.val) return leftMin;
    // if(rightMin < leftMin && rightMin < root.val) return rightMin;

    return Math.min(leftMin, rightMin, root.val);
}

const treeMaxValue = (root) => {
    const stack = [root];
    let biggest = Number.NEGATIVE_INFINITY;
    while(stack.length > 0) {
        const current = stack.pop();
        if(current.val > biggest) biggest = current.val;
        if(current.left !== null) stack.push(current.left);
        if(current.right !== null) stack.push(current.right);
    }
    return biggest;
}

const treeMaxValueB = (root) => {
    const queue = [root];
    let maxValue = Number.NEGATIVE_INFINITY;

    while (queue.length > 0) {
        let current = queue.shift();
        if(current.val > maxValue) maxValue = current.val;
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }

    return maxValue
}



const treeMaxValueR = (root) => {
    if(root === null) return Number.NEGATIVE_INFINITY;
    const leftMax = treeMaxValueR(root.left);
    const rightMax = treeMaxValueR(root.right);

    return Math.max(root.val, leftMax, rightMax);
}

const a = new Node(35);
const b = new Node(11);
const c = new Node(56);
const d = new Node(1);
const e = new Node(2);
const f = new Node(145);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


console.log(treeMinValue(a));

console.log(treeMaxValue(a));

console.log(treeMaxValueB(a));

//     a
//    / \
//   b   c
//  / \   \
// d   e   f











