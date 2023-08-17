"use strict";

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Adds a new node to the end of the list
    push(val) {
        let newNode = new Node(val);
        // if the list is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            // unnecessary, does future me remember why?
            // newNode.next = null;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }
    // removes a node from the end of the DLL
    pop() {
        // if the list is empty
        if (!this.head) {
            return;
        }

        let temp = this.tail;
        // if removing a node will cause an empty list
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            // severs the connection on the node
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }
}