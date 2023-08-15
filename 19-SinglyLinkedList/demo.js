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
    // pushes node to the end of the SLL, returns the SLL
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
        return this;
    }
    // One way of moving through the SLL nodes
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
    // removes from the end of the SLL, returns old tail
    pop() {
        if (!this.head) {
            return;
        }

        let current = this.head;
        let newTail = current;
        // loop until we find last node
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        // ensures head and tail are accurate when popping that results in emtpy list
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }
    // remove from the beginning, returns old head
    shift() {
        if (!this.head) {
            return;
        }
        let oldHead = this.head;
        let newHead = this.head.next;
        this.head = newHead;
        this.length--;
        // ensures head and tail are accurate when shifting that results in emtpy list
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return oldHead;
    }
    // add to beginning, returns the list
    unshift(val) {
        let newHead = new Node(val);

        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            // the else ensures the head assignment isn't self referencial
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        // will return the list instance
        return this;
    }
    // retrieves a node by its position in the SLL.
    get(idx) {
        if (idx < 0 || idx >= this.length) {
            return null;
        }
        let current = this.head;
        let counter = 0;
        while (counter < idx) {
            current = current.next;
            counter++;
        }
        return current;
    }
    // changes the value of a node given its position, returns true or false if could not complete
    set(idx, val) {
        let toBeReplaced = this.get(idx);
        if (!toBeReplaced) {
            return false;
        }
        toBeReplaced.val = val;
        return true;
    }
    // insert new node into the list at a given position, returns true if possible and false if not.
    insert(idx, val) {
        if (idx < 0 || idx > this.length) {
            return false;
        }
        // if we wanted to insert at the end. Sneaky ! coerses return of push to a boolean, with second ! flipping it.
        if (idx === this.length) {
            return !!this.push(val);
        }
        // if we wanted to insert at the beginning. Sneaky !!
        if (idx === 0) {
            return !!this.unshift(val);
        }
        // if we wanted to insert in the middle somewhere
        let newNode = new Node(val);
        let previousNode = this.get(idx - 1);
        let temp = previousNode.next;
        previousNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
}

let list = new SinglyLinkedList();
list.push('Hello')
list.push('Goodbye')
list.push('Are you still there?')
list.push('Powering down...')
list.push('Waaaaaaa')