class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(v1){
        if(!this.adjacencyList[v1]){
            this.adjacencyList[v1] = []
        }
    }
    addEdge(v1, v2){
        this.addVertex(v1)
        this.addVertex(v2)
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    depthFirstIteration(start){
        if(!this.adjacencyList[start]) return ;
        let stack = [start]
        let result = []
        let visited = {}
        visited[start] = true
        while(stack.length){
            let currentValue = stack.pop()
            result.push(currentValue)
            this.adjacencyList[currentValue].forEach((edge)=>{
                if(!visited[edge]){
                    stack.push(edge)
                    visited[edge] = true
                }
            }) 
        }
        return result
    }
}

const graph = new Graph()
graph.addEdge(10,11)
graph.addEdge(10,14)
graph.addEdge(10, 22)
graph.addEdge(10, 34)
graph.addEdge(34, 44)
graph.addEdge(11, 22)
graph.addEdge(22, 1)
console.log(graph.depthFirstIteration(10))