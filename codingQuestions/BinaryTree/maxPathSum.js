class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const maxPathSum = (root) => {
    if(root === null) return Number.NEGATIVE_INFINITY;
    if(root.left === null && root.right === null) return root.val;

    const leftMax = maxPathSum(root.left)
    const rightMax = maxPathSum(root.right)

    return root.val + Math.max(leftMax, rightMax);
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


console.log(maxPathSum(a));