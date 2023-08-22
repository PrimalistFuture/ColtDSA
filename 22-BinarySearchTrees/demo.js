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
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(10);
tree.insert(7);