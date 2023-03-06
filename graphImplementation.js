class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex,edge){
        this.addVertex(vertex)
        this.addVertex(edge)
        this.adjacencyList[vertex].push(edge);
        this.adjacencyList[edge].push(vertex);
    }
    removeEdge(vertex,edge){
        this.adjacencyList[vertex]= this.adjacencyList[vertex].filter(function(e){
            return e!=edge
        })
        this.adjacencyList[edge]= this.adjacencyList[edge].filter((v)=>v!=vertex)
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentEdge = this.adjacencyList[vertex].shift();
            this.removeEdge(vertex, adjacentEdge)
        }
        delete this.adjacencyList[vertex]
    }
    depthFirstIterative(start){
        const stack= [start]
        const visited= {}
        const result= []
        visited[start]= true
        let currentVertex;
        while(stack.length){
            let currentVertex = stack.pop()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach((edge)=>{
                if(!visited[edge]){
                    stack.push(edge)
                    visited[edge]= true
                }
            })
        }
        return result
    }
    breadthFirstIterative(start){
        const queue = [start];
        const result = []
        const visited = {}
        let currentVertex;
        visited[start] = true
        while(queue.length){
            currentVertex = queue.shift()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach((edge) => {
                if (!visited[edge]) {
                    queue.push(edge)
                    visited[edge] = true
                }
            })
        }
        return result
    }
}

const graph = new Graph()
graph.addEdge(10, 14)
graph.addEdge(10, 24)
graph.addEdge(10, 34)
graph.addEdge(14, 25)
graph.addEdge(18, 24)

// console.log(graph.adjacencyList)
console.log(graph.depthFirstIterative(10))
console.log(graph.breadthFirstIterative(10))
