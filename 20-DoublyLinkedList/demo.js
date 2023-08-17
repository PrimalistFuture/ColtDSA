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
    // removes a node from the end of the DLL, returning that node
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
    // remove node from the beginning of the DLL, returning that node
    shift() {
        if (!this.head) {
            return;
        }
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newHead = this.head.next;
            oldHead.next = null;
            newHead.prev = null;
            this.head = newHead;
        }
        this.length--;
        return oldHead;
    }
    // add node to beginning of the DLL, returning the list
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    // get and return the node at a given index. If idx OOB, return null
    get(idx) {
        if (idx < 0 || idx >= this.length) {
            return null;
        }
        let current;
        let counter;
        if ((this.length / 2) >= idx) {
            // from start
            current = this.head;
            counter = 0;
            while (counter !== idx) {
                current = current.next;
                counter++;
            }
        } else {
            // from end
            current = this.tail;
            counter = this.length - 1;
            while (counter !== idx) {
                current = current.prev;
                counter--;
            }
        }
        return current;
    }
}

let list = new DoublyLinkedList;
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);