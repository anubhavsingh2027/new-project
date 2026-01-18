exports.dfsAlgo=`
// Depth-First Search (DFS) Algorithm
// DFS explores as far as possible along each branch before backtracking, using a stack or recursion

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }

  dfsRecursive(startVertex, visited = new Set(), result = []) {
    visited.add(startVertex);
    result.push(startVertex);
    const neighbors = this.adjacencyList.get(startVertex) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this.dfsRecursive(neighbor, visited, result);
      }
    }
    return result;
  }

  dfsIterative(startVertex) {
    const visited = new Set();
    const stack = [startVertex];
    const result = [];
    visited.add(startVertex);
    while (stack.length > 0) {
      const vertex = stack.pop();
      result.push(vertex);
      const neighbors = this.adjacencyList.get(vertex) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
    return result;
  }
}
`;


exports.dfsJavascript=`
// Depth-First Search (DFS) Algorithm
// DFS explores as far as possible along each branch before backtracking, using a stack or recursion

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
  }

  // DFS traversal using recursion (Depth-First Search)
  dfsRecursive(startVertex, visited = new Set(), result = []) {
    visited.add(startVertex);
    result.push(startVertex);

    const neighbors = this.adjacencyList.get(startVertex) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this.dfsRecursive(neighbor, visited, result);
      }
    }

    return result;
  }

  // DFS traversal using stack (Iterative approach)
  dfsIterative(startVertex) {
    const visited = new Set();
    const stack = [startVertex];
    const result = [];

    visited.add(startVertex);

    while (stack.length > 0) {
      const vertex = stack.pop(); // Remove from top of stack
      result.push(vertex);

      const neighbors = this.adjacencyList.get(vertex) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }

    return result;
  }

  // DFS to detect cycle in graph
  hasCycle() {
    const visited = new Set();
    const recursionStack = new Set();

    for (const vertex of this.adjacencyList.keys()) {
      if (!visited.has(vertex)) {
        if (this._dfsHasCycle(vertex, visited, recursionStack)) {
          return true;
        }
      }
    }

    return false;
  }

  _dfsHasCycle(vertex, visited, recursionStack) {
    visited.add(vertex);
    recursionStack.add(vertex);

    const neighbors = this.adjacencyList.get(vertex) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        if (this._dfsHasCycle(neighbor, visited, recursionStack)) {
          return true;
        }
      } else if (recursionStack.has(neighbor)) {
        return true;
      }
    }

    recursionStack.delete(vertex);
    return false;
  }

  // DFS to find connected components
  getConnectedComponents() {
    const visited = new Set();
    const components = [];

    for (const vertex of this.adjacencyList.keys()) {
      if (!visited.has(vertex)) {
        const component = [];
        this._dfsComponent(vertex, visited, component);
        components.push(component);
      }
    }

    return components;
  }

  _dfsComponent(vertex, visited, component) {
    visited.add(vertex);
    component.push(vertex);

    const neighbors = this.adjacencyList.get(vertex) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this._dfsComponent(neighbor, visited, component);
      }
    }
  }
}

const graph = new Graph();

// Add edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("E", "F");

// DFS traversal using recursion
console.log("DFS (Recursive) from A:", graph.dfsRecursive("A"));

// DFS traversal using iterative approach
console.log("DFS (Iterative) from A:", graph.dfsIterative("A"));

// Check for cycle
console.log("Has Cycle:", graph.hasCycle());

// Find connected components
console.log("Connected Components:", graph.getConnectedComponents());

module.exports = Graph;

`;