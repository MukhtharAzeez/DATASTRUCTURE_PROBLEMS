class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    insert(value) {
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    search(root, value) {
        if (!root) {
            return false;
        }
        if (root.value == value) {
            return true
        } else {
            if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }
    preOrderTraversal(root) {
        if (root) {
            console.log(root.value);
            this.preOrderTraversal(root.left)
            this.preOrderTraversal(root.right)
        }
    }
    inOrderTraversal(root) {
        if (root) {
            this.inOrderTraversal(root.left)
            console.log(root.value)
            this.inOrderTraversal(root.right)
        }
    }
    postOrderTraversal(root) {
        if (root) {
            this.postOrderTraversal(root.left)
            this.postOrderTraversal(root.right)
            console.log(root.value)
        }
    }
    BFSSearch() {
        const queue = [];
        queue.push(this.root)
        while (queue.length) {
            let current = queue.shift()
            console.log(current.value)
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
    }
    minNode(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.minNode(root.left)
        }
    }
    maxNode(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.maxNode(root.right)
        }
    }
    deleteNode(root, value) {
        console.log(root.value,value)
        if (root === null) return root;
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }

            root.value = this.minNode(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root;
    }
    isBinaryTree(root) {
        if (root === null) {
            return true;
        }

        if (root.left !== null && root.left.value > root.value) {
            return false;
        }

        if (root.right !== null && root.right.value < root.value) {
            return false;
        }
        
        return this.isBinaryTree(root.left) && this.isBinaryTree(root.right);
    }
}
//        10             
//      /    \
//     5      15
//    / \     / \
//   3   7   11  24
//  / \    \
// 1   4    9  

const tree = new BinarySearchTree();
tree.insert(10)
tree.insert(8)
tree.insert(12)
tree.insert(4)
tree.insert(11)
tree.insert(9)
tree.insert(16)


// console.log(tree.search(tree.root,5))
// tree.preOrderTraversal(tree.root)
// tree.inOrderTraversal(tree.root)
// tree.postOrderTraversal(tree.root)
// tree.minNode(tree.root);
// tree.maxNode(tree.root);
tree.deleteNode(tree.root, 8)
// console.log(tree.isBinaryTree(tree.root))
// tree.BFSSearch()