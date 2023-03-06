class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2) {
        this.addVertex(v1)
        this.addVertex(v2)
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(vertex, edge) {
        if (this.adjacencyList[edge] && this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = this.adjacencyList[vertex].filter((v) => v != edge)
            this.adjacencyList[edge] = this.adjacencyList[edge].filter((v) => v != vertex)
        }
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const edge = this.adjacencyList[vertex].pop()
            this.adjacencyList[edge] = this.adjacencyList[edge].filter((v) => v != vertex)
        }
        delete this.adjacencyList[vertex]
    }
    hasEdge(vertex, edge) {
        return (
            this.adjacencyList[vertex].includes(edge) &&
            this.adjacencyList[edge].includes(vertex)
        )
    }
    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + "--->" + [...this.adjacencyList[vertex]]);
        }
    }
    depthFirstIterative(start){
        if(!this.adjacencyList[start]) return console.log("There is no vertex in the graph")
        let stack = [start];
        let result = [];
        let visited = {};
        visited[start] = true;
        while(stack.length){
            let currentVertex = stack.pop();
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach((neighbor)=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        console.log(result)
    }
    breadthFirstIterative(start){
        if (!this.adjacencyList[start]) return console.log("There is no vertex in the graph")
        let queue = [start];
        let result = [];
        let visited = {};
        visited[start] = true;
        while(queue.length){
            let currentVertex = queue.shift();
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach((neighbor)=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        console.log(result)
    }
}
const graph = new Graph();
graph.addEdge(10, 14)
graph.addEdge(10, 24)
graph.addEdge(10, 34)
graph.addEdge(14, 25)
graph.addEdge(18, 24)
// graph.removeVertex(8)
// graph.removeEdge(4, 8)
// console.log(graph.hasEdge(4,11))
graph.depthFirstIterative(10)
graph.breadthFirstIterative(10)
// graph.display()