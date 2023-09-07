"use strict";

// ez prio queue
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, prio) {
        this.values.push({ val, prio });
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.prio - b.prio);
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    // adds a vertex to the graph with no edges. Returns the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
        return this;
    }
    // adds an edge (connection) between two input verteces(spelling?). Returns the adjacency list. Won't add edge to vertecies that don't exist. If we wanted to make this a DIRECTED GRAPH, our edge would only go one direction.
    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].push({ node: vertex2, weight });
        }
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].push({ node: vertex1, weight });
        }
        return this.adjacencyList;
    }
    // pseudo
    // 1. when we look to visit a new node, we pick the node with the smallest known distance to visit first.
    // 2. Once there, we look at each of its neighbors
    // 3. For each neighbor, we calc the distance by summing the total edges that lead to the node we're checking from the starting node.
    // 4. If the new total distance to a node is less than the previous total, we store the new shorted distance for that node.
    Dijstra(start, end) {
        let pq = new PriorityQueue();
        let distance = {};
        let previous = {};
        let path = [];
        let smallest;
        // builds initial distance state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distance[vertex] = 0;
                pq.enqueue(vertex, 0);
            } else {
                distance[vertex] = Infinity;
                pq.enqueue(vertex, Infinity);
            }
            // builds initial state
            previous[vertex] = null;
        }

        while (pq.values.length) {
            smallest = pq.dequeue().val;
            if (smallest === end) {
                // we are done
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distance[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    // finds neighboring nodes
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // calculates new distance based on what we have already to neighboring node
                    let candidate = distance[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distance[nextNeighbor]) {
                        // updates new smallest distance to neighbor
                        distance[nextNeighbor] = candidate;
                        // updates previous with how we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueues in prio queue with new priority
                        pq.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

let g = new WeightedGraph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'D', 3);
g.addEdge('C', 'E', 2);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);

g.Dijstra('A', 'E');

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// // max binary heap
// class MaxBinaryHeap {
//     constructor() {
//         this.values = [];
//     }
//     // inserts a value into the max binary heap, returns the heap
//     insert(val) {
//         this.values.push(val);
//         this.bubbleUp();
//         // my addition to make test easier
//         return this;
//     }
//     // helper to bubble the val into the right spot of the mbh
//     bubbleUp() {
//         // idx of newly inserted item that needs to be organized
//         let idx = this.values.length - 1;

//         while (idx > 0) {
//             // its parent
//             let parentIdx = Math.floor((idx - 1) / 2);
//             if (this.values[idx] > this.values[parentIdx]) {
//                 let temp = this.values[idx];
//                 this.values[idx] = this.values[parentIdx];
//                 this.values[parentIdx] = temp;

//                 idx = parentIdx;
//             } else {
//                 break;
//             }
//         }
//     }
//     // removes the root, and assigns the most recent item to be the root, then adjusts the heap. Returns the removed root.
//     extractMax() {
//         let max = this.values[0];
//         let end = this.values.pop();
//         if (this.values.length > 0) {
//             this.values[0] = end;
//             this.sinkDown();
//         }
//         return max;
//     }
//     sinkDown() {
//         let idx = 0;
//         const length = this.values.length;
//         let element = this.values[0];
//         while (true) {
//             let leftChildIdx = 2 * idx + 1;
//             let rightChildIdx = 2 * idx + 2;
//             let leftChild;
//             let rightChild;
//             let swap = null;

//             if (leftChildIdx < length) {
//                 leftChild = this.values[leftChildIdx];
//                 if (leftChild > element) {
//                     swap = leftChildIdx;
//                 }
//             }
//             if (rightChildIdx < length) {
//                 rightChild = this.values[rightChildIdx];
//                 // yuck
//                 if (
//                     (rightChild > element && swap === null) ||
//                     (swap !== null && rightChild > leftChild)
//                 ) {
//                     swap = rightChildIdx;
//                 }
//             }

//             if (swap === null) {
//                 break;
//             }
//             this.values[idx] = this.values[swap];
//             this.values[swap] = element;
//             idx = swap;
//         }
//     }
// }

// let heap = new MaxBinaryHeap();
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);


// // PRIORITY QUEUE
// class Node {
//     constructor(val, prio) {
//         this.val = val;
//         this.prio = prio;
//         // insertion time not currently used, but could be part of the comparisons if we wanted.
//         // this.insertTime = Date.now();
//     }
// }
// implemented as a min binary heap where lower prios are first
// class PriorityQueue {
//     constructor() {
//         this.values = [];
//     }
//     enqueue(val, prio) {
//         let newNode = new Node(val, prio);
//         this.values.push(newNode);
//         this.bubbleUp();
//     }
//     // helper to bubble the val into the right spot of the mbh. Rewrote to better match what I did in sinkDown()
//     bubbleUp() {
//         // idx of newly inserted item that needs to be organized
//         let idx = this.values.length - 1;
//         let element = this.values[idx];
//         while (idx > 0) {
//             // its parent
//             let parentIdx = Math.floor((idx - 1) / 2);
//             let parent = this.values[parentIdx];
//             if (element.prio >= parent.prio) {
//                 break;
//             }
//             this.values[parentIdx] = element;
//             this.values[idx] = parent;
//             idx = parentIdx;
//         }
//     }
//     dequeue() {
//         let min = this.values[0];
//         let end = this.values.pop();
//         if (this.values.length > 0) {
//             this.values[0] = end;
//             this.sinkDown();
//         }
//         return min;
//     }
//     sinkDown() {
//         let idx = 0;
//         const length = this.values.length;
//         let element = this.values[0];
//         while (true) {
//             let leftChildIdx = 2 * idx + 1;
//             let rightChildIdx = 2 * idx + 2;
//             let leftChild;
//             let rightChild;
//             let swap = null;

//             if (leftChildIdx < length) {
//                 leftChild = this.values[leftChildIdx];
//                 if (leftChild.prio < element.prio) {
//                     swap = leftChildIdx;
//                 }
//             }
//             if (rightChildIdx < length) {
//                 rightChild = this.values[rightChildIdx];
//                 // yuck
//                 // havent swapped and right is less than elem
//                 // OR have swapped and right is less than left
//                 if (
//                     (swap === null && rightChild.prio < element.prio) ||
//                     (swap !== null && rightChild.prio < leftChild.prio)
//                 ) {
//                     swap = rightChildIdx;
//                 }
//             }

//             if (swap === null) {
//                 break;
//             }
//             this.values[idx] = this.values[swap];
//             this.values[swap] = element;
//             idx = swap;
//         }
//     }
// }

// let prioQueue = new PriorityQueue();
// prioQueue.enqueue('common cold', 5)
// prioQueue.enqueue('wont stop smiling', 4)
// prioQueue.enqueue('ligma', 3)
// prioQueue.enqueue('broken arm', 2)
// prioQueue.enqueue('gunshot wound', 1)