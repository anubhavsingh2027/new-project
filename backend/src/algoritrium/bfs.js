exports.bfsJavaScript=
`
// Breadth-First Search (BFS) Algorithm
// BFS explores nodes level by level, using a queue data structure

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

  // BFS traversal starting from a given vertex
  bfs(startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    const result = [];

    visited.add(startVertex);

    while (queue.length > 0) {
      const vertex = queue.shift(); // Dequeue
      result.push(vertex);

      // Get all adjacent vertices
      const neighbors = this.adjacencyList.get(vertex) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor); // Enqueue
        }
      }
    }

    return result;
  }

  // BFS to find shortest path between two vertices
  shortestPath(startVertex, endVertex) {
    const visited = new Set();
    const queue = [[startVertex, [startVertex]]];
    visited.add(startVertex);

    while (queue.length > 0) {
      const [vertex, path] = queue.shift();

      if (vertex === endVertex) {
        return path;
      }

      const neighbors = this.adjacencyList.get(vertex) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, [...path, neighbor]]);
        }
      }
    }

    return null; // No path found
  }
}

// Example usage
const graph = new Graph();

// Add edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("E", "F");

// BFS traversal from 'A'
console.log("BFS Traversal from A:", graph.bfs("A"));

// Find shortest path from 'A' to 'F'
console.log("Shortest path from A to F:", graph.shortestPath("A", "F"));

// Find shortest path from 'A' to 'E'
console.log("Shortest path from A to E:", graph.shortestPath("A", "E"));

module.exports = Graph;
`

exports.bfsAlgo = `
// BFS Algorithm - Concise Implementation
function bfs(graph, startVertex) {
  const visited = new Set([startVertex]);
  const queue = [startVertex];
  const result = [];

  while (queue.length > 0) {
    const vertex = queue.shift();
    result.push(vertex);

    for (const neighbor of graph[vertex] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}
`;

exports.bfsCpp = `
// Breadth-First Search (BFS) Algorithm in C++
// BFS explores nodes level by level, using a queue data structure

#include <iostream>
#include <unordered_map>
#include <vector>
#include <queue>
#include <unordered_set>

using namespace std;

class Graph {
private:
  unordered_map<int, vector<int>> adjacencyList;

public:
  // Add a vertex to the graph
  void addVertex(int vertex) {
    if (adjacencyList.find(vertex) == adjacencyList.end()) {
      adjacencyList[vertex] = vector<int>();
    }
  }

  // Add an edge between two vertices
  void addEdge(int vertex1, int vertex2) {
    addVertex(vertex1);
    addVertex(vertex2);
    adjacencyList[vertex1].push_back(vertex2);
    adjacencyList[vertex2].push_back(vertex1); // For undirected graph
  }

  // BFS traversal starting from a given vertex
  vector<int> bfs(int startVertex) {
    unordered_set<int> visited;
    queue<int> q;
    vector<int> result;

    visited.insert(startVertex);
    q.push(startVertex);

    while (!q.empty()) {
      int vertex = q.front();
      q.pop();
      result.push_back(vertex);

      for (int neighbor : adjacencyList[vertex]) {
        if (visited.find(neighbor) == visited.end()) {
          visited.insert(neighbor);
          q.push(neighbor);
        }
      }
    }

    return result;
  }
};

// Example usage
int main() {
  Graph graph;

  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(1, 3);
  graph.addEdge(2, 4);

  vector<int> result = graph.bfs(0);
  
  cout << "BFS Traversal: ";
  for (int vertex : result) {
    cout << vertex << " ";
  }
  cout << endl;

  return 0;
}
`;