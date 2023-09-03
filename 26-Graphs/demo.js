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
}



let graph = new Graph();
graph.addVertex('Tokyo');
graph.addVertex('San Francisco');
graph.addVertex('Boston');
graph.addVertex('Singapore');

graph.addEdge('Tokyo', 'San Francisco');
graph.addEdge('Boston', 'San Francisco');
graph.addEdge('Singapore', 'San Francisco');
graph.addEdge('Singapore', 'Tokyo');