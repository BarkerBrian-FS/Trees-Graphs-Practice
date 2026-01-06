class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function zigZagTraverse(root) {
    if (root === null) return -1;
    let queue = [root];
    let result = [];
    let level = 1;
    while (queue.length > 0){
        const isLeftToRight = level % 2 === 1;
        const subLength = queue.length;
        const subList = [];
        for(let i = 0; i < subLength; i++){
          let node;
          if (isLeftToRight){
            node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
          }  
          else{
            node = queue.pop();
            if (node.right) queue.unshift(node.right);
            if (node.left) queue.unshift(node.left);
          }
          subList.push(node.val);
        }
        level++;
        result.push(subList)
    }
    return result;
}