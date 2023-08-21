"use strict";

// stack - LIFO
// using an array
let arrStack = [];
stack.push('vaughn');
stack.push('cee');
stack.push('abe');

stack.pop();

// using a class
// class for individuals nodes
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// class for stack. 
class Stack {
    constructor() {
        // these could easily be head, tail, length like in SLL.
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // add a node with a given value to the 'top' of the stack.
    // return the new size
    push(val) {
        let newNode = new Node(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        }
        ;
        return ++this.size;
    }
    // remove a node from the 'top' of the stack.
    pop() {
        if (!this.first) {
            return null;
        }
        if (this.size === 1) {
            this.last = null;
        }

        let oldFirst = this.first;
        this.first = oldFirst.next;
        oldFirst.next = null;

        this.size--;
        return oldFirst.val;

    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);


// queue - FIFO

// using an array
let q = [];

q.unshift(1);
q.unshift(2);
q.unshift(3);

q.pop();

// ------ or -------

q.push('first');
q.push('second');
q.push('third');

q.shift();

// Both of these have issues because adding or removing items from the beginning of an array is a O(n).

// using a class

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null
        this.size = 0;
    }
    // adds an item to the end - functions like push
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    // removes an item from the beginning of the queue
    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.size === 1) {
            this.last = null;
        }
        let temp = this.first;
        this.first = temp.next;
        temp.next = null;
        this.size--;
        return temp.val;
    }
}

let queue = new Queue();
queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');
