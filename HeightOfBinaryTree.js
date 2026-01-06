class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


function getHeight(root) {
    if(root === null) return -1;
    const left = getHeight(root.left);
    const right = getHeight(root.rights);
    const heighest = Math.max(left, right);
    return heighest +1;
}

/*
recursive one liner
if(root === null) return -1;
return Math.max(getHeight(root.left), getHeight(root.right))+ 1;
*/