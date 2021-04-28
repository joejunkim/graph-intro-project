
class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
      if(!this.adjList[vertex]) {
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
        // Code goes here ...
    }

    depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
        // Code goes here ...
    }

}

module.exports = {
    Graph
};
