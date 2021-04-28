
class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }

    addEdges(srcValue, destValue) {
        this.addVertex(srcValue);
        this.addVertex(destValue);

        const srcNeighbors = this.adjList[srcValue];
        const destNeighbors = this.adjList[destValue];

        if (!srcNeighbors.includes(destValue)) srcNeighbors.push(destValue);
        if (!destNeighbors.includes(srcValue)) destNeighbors.push(srcValue);
    }

    buildGraph(edges) {
        edges.forEach(edge => { this.addEdges(edge[0], edge[1]) })
        return this.adjList;
    }

    breadthFirstTraversal(startingVertex) {
        const queueArray = [startingVertex];
        const sortedVals = [];
        const visited = new Set();
        visited.add(startingVertex);

        while (queueArray.length) {
            const currentNode = queueArray.shift();
            const currNodeNeighbors = this.adjList[currentNode];
            currNodeNeighbors.forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    queueArray.push(neighbor);
                    visited.add(neighbor);
                }
            })
            sortedVals.push(currentNode);
        }

        return sortedVals;
    }

    depthFirstTraversalIterative(startingVertex) {
        const stackArray = [startingVertex];  //[b,c,]
        const sortedVals = []; // [a]
        const visited = new Set();
        visited.add(startingVertex); //{a,b,c,d}

        while (stackArray.length) {
            const currentNode = stackArray.pop();  // d
            const currNodeNeighbors = this.adjList[currentNode]; //[]
            currNodeNeighbors.forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    stackArray.push(neighbor);
                    visited.add(neighbor);
                }
            });
            sortedVals.push(currentNode);
        }
        return sortedVals;
    }

    depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
        debugger;
        if (visited.has(startingVertex)) return;

        visited.add(startingVertex);
        vertices.push(startingVertex);
        const currNodeNeighbors = this.adjList[startingVertex]; //[]
        debugger;
        currNodeNeighbors.forEach(neighbor => {
            debugger;
            if (!visited.has(neighbor)) {
                debugger;
                this.depthFirstTraversalRecursive(neighbor, visited, vertices);
            }
        });
        debugger;
        return vertices;
    }

}

let graph;
const edges =
    [['a', 'b'],
    ['a', 'c'],
    ['a', 'd'],
    ['d', 'g'],
    ['b', 'c'],
    ['b', 'e'],
    ['c', 'f'],
    ['c', 'g'],
    ['f', 'g'],
    ['h']]
graph = new Graph();
for (let edge of edges) {
    if (edge.length === 1) {
        graph.addVertex(edge[0])
    } else {
        graph.addEdges(edge[0], edge[1])
    }
}
graph.depthFirstTraversalRecursive('a');
console.log(graph);

module.exports = {
    Graph
};
