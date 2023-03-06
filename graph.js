class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.addVertex(v1)
        this.addVertex(v2)
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => {return v !== v2})
        this.adjacencyList[v2] = this.adjacencyList[v1].filter((v) => v !== v1)
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        })(start)
        return result;
    }
    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {}
        let currentVertex;
        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result
    }
    breadthFirstIterative(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}

const graph = new Graph();
// graph.addEdge(10, 14)
// graph.addEdge(10, 24)
// graph.addEdge(10, 34)
// graph.addEdge(14, 25)
// graph.addEdge(18, 24)
graph.addEdge(10, 11)
graph.addEdge(10, 14)
// console.log(graph.adjacencyList)
console.log(graph.depthFirstIterative(10))
// console.log(graph.breadthFirstIterative(10))
