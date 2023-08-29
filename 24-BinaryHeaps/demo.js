"use strict";

// max binary heap
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    // inserts a value into the max binary heap, returns the heap
    insert(val) {
        this.values.push(val);
        this.bubbleUp();
        // my addition to make test easier
        return this;
    }
    // helper to bubble the val into the right spot of the mbh
    bubbleUp() {
        // idx of newly inserted item that needs to be organized
        let idx = this.values.length - 1;

        while (idx > 0) {
            // its parent
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.values[idx] > this.values[parentIdx]) {
                let temp = this.values[idx];
                this.values[idx] = this.values[parentIdx];
                this.values[parentIdx] = temp;

                idx = parentIdx;
            } else {
                break;
            }
        }
    }
    // removes the root, and assigns the most recent item to be the root, then adjusts the heap. Returns the removed root.
    extractMax() {
        let max = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        let element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild;
            let rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                // yuck
                if (
                    (rightChild > element && swap === null) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) {
                break;
            }
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);


// PRIORITY QUEUE
class Node {
    constructor(val, prio) {
        this.val = val;
        this.prio = prio;
        // insertion time not currently used, but could be part of the comparisons if we wanted.
        // this.insertTime = Date.now();
    }
}
// implemented as a min binary heap where lower prios are first
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, prio) {
        let newNode = new Node(val, prio);
        this.values.push(newNode);
        this.bubbleUp();
        // my addition to make test easier
    }
    // helper to bubble the val into the right spot of the mbh. Rewrote to better match what I did in sinkDown()
    bubbleUp() {
        // idx of newly inserted item that needs to be organized
        let idx = this.values.length - 1;
        let element = this.values[idx];
        while (idx > 0) {
            // its parent
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.prio >= parent.prio) {
                break;
            }
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        let min = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        let element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild;
            let rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.prio < element.prio) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                // yuck
                if (
                    (swap === null && rightChild.prio < element.prio) ||
                    (swap !== null && rightChild.prio < leftChild.prio)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) {
                break;
            }
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let prioQueue = new PriorityQueue();
prioQueue.enqueue('common cold', 5)
prioQueue.enqueue('wont stop smiling', 4)
prioQueue.enqueue('ligma', 3)
prioQueue.enqueue('broken arm', 2)
prioQueue.enqueue('gunshot wound', 1)
