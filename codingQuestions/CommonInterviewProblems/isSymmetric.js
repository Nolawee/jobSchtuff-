class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const isEqual = (r1, r2) => {
    if(!r1 && !r2) return true;

    if(!r1 || !r2) return false;

    if(r1.val === r2.val)  return isEqual(r1.left, r2.right) && isEqual(r1.right, r2.left);
    else return false;
}

const isSymmetric = (root) => {
    if(root === null) return true;
    return isEqual(root.left, root.right);
}




const a = new Node(3);
const b = new Node(11);
const c = new Node(12);
const e = new Node(1);
const f = new Node(1);

a.left = b;
a.right = c;
b.right = e;
c.left = f;


console.log(isSymmetric(a));