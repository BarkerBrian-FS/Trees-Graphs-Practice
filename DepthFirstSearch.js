// Searches deeper into a tree whenever possible
// Explores node until it reaches a leaf node
// Once leaf found search backtracks and goes to another path until leaf
// Big O N

function depthFirstSearch(root, target){
    if(!root) return false;
    if(root.val === target) return true;
    const left = depthFirstSearch(root.left, target);
    const right = depthFirstSearch(root.right, target);
    return left || right
}


const root = new BinaryTreeNode('A');
root.left = new BinaryTreeNode('B');
root.right = new BinaryTreeNode('C');
root.left.left = new BinaryTreeNode('D');
root.left.right = new BinaryTreeNode('E');
root.right.right = new BinaryTreeNode('F');
