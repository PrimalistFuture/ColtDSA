"use strict";



// binary search tree implementation
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // inserts a node of a given value into the correct spot of the tree.
    // Returns the tree.
    // done interatively, but could have been done recursively.
    insert(val) {
        let newNode = new Node(val);
        // if bst is empty
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        // runs until a suitable place is found
        while (true) {
            if (val === current.val) {
                return `dup val`;
            }
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    // searchs bst and finds node of a given val if it exists
    // returns t of f
    contains(val) {
        // if bts is empty
        if (!this.root) {
            return false;
        }
        let current = this.root;
        let found = false;
        // loop while there is something to look at and we have not found the val
        while (!found && current) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right
            }
            else {
                found = true;
            }
        }
        return found;
    }
    // Breadth-First Search
    BFS() {
        let visited = [];
        let queue = [];
        let node = this.root;

        queue.push(node);
        // queue.length !== 0: while there is something in the queue array
        while (queue.length) {
            // declaring the node outside the loop is better for performance
            // reassigns node to be the first item of the queue, 
            node = queue.shift();
            // pushes that first item into visited. Could be node.val if that is all we care about
            visited.push(node);
            if (node.left) {
                // enqueues
                queue.push(node.left);
            }
            if (node.right) {
                // enqueues
                queue.push(node.right);
            }
        }
        return visited;
    }
    // Depth-First Search PreOrder
    // returns array of nodes in the tree
    DFS_preOrder() {
        let visited = [];
        // helper func that takes in a node, pushes it into an array, and recursively looks through its left-most children, then its right-most children
        function traverse(node) {
            // could be node.val if that is all we care about
            visited.push(node);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        // invoke the helper on the root node
        traverse(this.root);
        return visited;
    }
    // Depth-First Search PostOrder
    // returns array of nodes in the tree
    DFS_postOrder() {
        let visited = [];
        // helper func that takes in a node, recursively looks through its left-most children, then its right-most children, before pushing the node into an array
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            // could be node.val if that is all we care about
            visited.push(node);
        }
        // invoke the helper on the root node
        traverse(this.root);
        return visited;
    }
    // Depth-First Search in Order
    // returns array of nodes in the tree
    DFS_inOrder() {
        let visited = [];
        // helper func that takes in a node, recursively looks through its left-most children, pushes that node into an array, then traverses  its right-most children, 
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            // could be node.val if that is all we care about
            visited.push(node);
            if (node.right) {
                traverse(node.right);
            }
        }
        // invoke the helper on the root node
        traverse(this.root);
        return visited;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

tree.BFS();
// [10,6,15,3,8,20]

tree.DFS_preOrder();
// [10,6,3,8,15,20]

tree.DFS_postOrder();
// [3,8,6,20,15,10]

tree.DFS_inOrder();
// [3,6,8,10,15,20]