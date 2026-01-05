// BFS explores level by level, visting children of node before going deeper
// Uses queue data structure to keep track of which nodes to visit

// start traversal by visiting the root node
// enqueue children of current node
// Dequeue the next node, visit it and equeue its children
// Repeat process until queue is empty 

// Big O is O(n)

function breadthFirstSearch(root, target){
    if(!root) return false;
    const queue = [root];
    while(queue.length > 0){
        const curr = queue.shift();
        if(curr.val === target) return true;
        if(curr.left){
            queue.push(curr.left);
        }
        if(curr.right){
            queue.push(curr.right);
        }
    }
    return false;
}

const root = new BinaryTreeNode('A');
root.left = new BinaryTreeNode('B');
root.right = new BinaryTreeNode('C');
root.left.left = new BinaryTreeNode('D');
root.left.right = new BinaryTreeNode('E');
root.right.right = new BinaryTreeNode('F');

