const root = new BinaryTreeNode('A');
root.left = new BinaryTreeNode('B');
root.right = new BinaryTreeNode('C');
root.left.left = new BinaryTreeNode('D');
root.left.right = new BinaryTreeNode('E');
root.right.right = new BinaryTreeNode('F');


// In order Traversal
// Travers left tree recursively 
// Visit current Node
// Travers right tree recursively 

function inOrder(node){
    if(node != null){
        inOrder(node.left);
        console.log(node.val);
        inOrder(node.right);
    }
}



// Pre order Traversal
// Visit current Node
// Travers left tree recursively 
// Travers right tree recursively

function preOrder(node){
    if(node != null){
        console.log(node.val);
        preOrder(node.left);
        preOrder(node.right);
    }
}

//Post order Traversal 
// Traverse left recursively
// Traverse right recursively
// Visit current node

function postOrder(node){
    if(node != null){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.val);
    }
}