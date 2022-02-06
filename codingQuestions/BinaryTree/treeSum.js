class Node {
    constructor(val) {
        this. val = val;
        this.left = null;
        this.right = null;
    }
}

// const treeSum = (root, value=0) => {
//     if(root === null) return 0;
//     if(root.val) value += root.val;
//     if(root.left !== null) value = treeSum(root.left, value);
//     if(root.right !== null) value = treeSum(root.right, value);
//     return value
// }

// const treeSum = (root) => {
//     if (root=== null) return 0;
//     return root.val + treeSum(root.left) + treeSum(root.right);
// }

const treeSum = (root) => {
    if (root=== null) return 0;
    const queue = [ root ];
    let totalSum = 0;
    while (queue.length > 0) {
        const current = queue.shift();
        totalSum +=current.val
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return totalSum;
}


const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(4);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


console.log(treeSum(a));