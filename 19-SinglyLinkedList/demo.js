"use strict";

// node
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// creating a new node
let first = new Node('Hi');
// adding new nodes like this can get tedious.
first.next = new Node('there');
first.next.next = new Node('you.');

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // pushes node to the end of the SLL
    push(val) {
        let node = new Node(val);

        if (!list.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    // One way of moving through the SLL nodes
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
    // removes from the end of the SLL
    pop() {
        if (!this.head) {
            return;
        }

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }
}

let list = new SinglyLinkedList();