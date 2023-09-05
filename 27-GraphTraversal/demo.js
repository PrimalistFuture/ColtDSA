"use strict";

// adjacency list for undirected graph
class Graph {
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
    // adds an edge (connection) between two input vertexs(spelling). Returns the adjacency list. Won't add edge to vertecies that don't exist. If we wanted to make this a DIRECTED GRAPH, our edge would only go one direction.
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].push(vertex2);
        }
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].push(vertex1);
        }
        return this.adjacencyList;
    }
    // removes an edge between to input vertecies. Makes no attempt to handle errors.
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            vertex => vertex !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            vertex => vertex !== vertex1
        );
    }
    // removes a vertex from the graph. In so doing, removes all edges from that vertex. Makes no attempt to handle any number of errors.
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            let adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        // never once have I used delete.
        delete this.adjacencyList[vertex];
    }
    // Given a vertex, returns array of nodes in DepthFirst order
    DFRecursive(vertex) {
        let visited = {};
        let result = [];
        // need to do this because otherwise we lose this context in the helper
        let adjacencyList = this.adjacencyList;

        // IFFY recursion helper
        (function DFS(node) {
            // does this ever run?
            if (!node) {
                return null;
            }
            visited[node] = true;
            result.push(node);
            // Below outputs [A,B,D,E,C] No F, when line 60 has a return on the invocation. Has to do with how js handles for of differently from forEach, but I don't understand the specifics.
            for (let neighbor of adjacencyList[node]) {
                if (!visited[neighbor]) {
                    // not return DFS(neighbor)
                    DFS(neighbor);
                }
            }
            // forEach for posterity
            // adjacencyList[node].forEach(neighbor => {
            //     if (!visited[neighbor]) {
            //         return DFS(neighbor);
            //     }
            // })
        })(vertex);
        return result;
    }
    // same as above, but iteratively. Given a vertex, returns an array of  DepthFirst order which is slightly different than the DFRecursive order
    DFIterative(vertex) {
        let stack = [];
        let visited = {};
        let result = [];
        let node;

        stack.push(vertex);
        visited[vertex] = true;

        while (stack.length !== 0) {
            node = stack.pop();
            result.push(node);

            for (let neighbor of this.adjacencyList[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            }
        }
        return result;
    }
    // Given a vertex, returns an array of Breadth First Search order.
    BFS(vertex) {
        let queue = [];
        let visited = {};
        let result = [];
        let node;

        queue.push(vertex);
        visited[vertex] = true;

        while (queue.length !== 0) {
            node = queue.shift();
            result.push(node);

            for (let neighbor of this.adjacencyList[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }
}

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F