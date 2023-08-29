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
    // removes the root, and assigns the most recent item to be the root, then adjusts the heap. Returns the heap.
    extractMax() {
        let last = this.values[this.values.length - 1];
        this.values.shift();
        this.values.unshift(last);
        this.values.pop();
        this.sinkDown();
    }
    sinkDown() {
        let parentIdx = 0;
        let parent = this.values[parentIdx];
        let leftChildIdx = 2 * parentIdx + 1;
        let leftChild = this.values[leftChildIdx];
        let rightChildIdx = 2 * parentIdx + 2;
        let rightChild = this.values[rightChildIdx];

        if (parent < leftChild && parent < rightChild) {
            let larger = leftChild >= rightChild ? leftChild : rightChild;
            let temp = parent;
            parent = larger;
            larger = temp;
        }
        if (parent < leftChild) {
            // MORE HERE OR WATCH VIDEO
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
