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

exports.dfsCpp=`
// Depth-First Search (DFS) Algorithm
// DFS explores as far as possible along each branch before backtracking, using a stack or recursion

#include <iostream>
#include <map>
#include <set>
#include <vector>
#include <stack>
using namespace std;

class Graph {
private:
  map<char, vector<char>> adjacencyList;

  bool dfsHasCycle(char vertex, set<char>& visited, set<char>& recursionStack) {
    visited.insert(vertex);
    recursionStack.insert(vertex);

    for (char neighbor : adjacencyList[vertex]) {
      if (visited.find(neighbor) == visited.end()) {
        if (dfsHasCycle(neighbor, visited, recursionStack)) {
          return true;
        }
      } else if (recursionStack.find(neighbor) != recursionStack.end()) {
        return true;
      }
    }

    recursionStack.erase(vertex);
    return false;
  }

  void dfsComponent(char vertex, set<char>& visited, vector<char>& component) {
    visited.insert(vertex);
    component.push_back(vertex);

    for (char neighbor : adjacencyList[vertex]) {
      if (visited.find(neighbor) == visited.end()) {
        dfsComponent(neighbor, visited, component);
      }
    }
  }

public:
  void addVertex(char vertex) {
    if (adjacencyList.find(vertex) == adjacencyList.end()) {
      adjacencyList[vertex] = vector<char>();
    }
  }

  void addEdge(char vertex1, char vertex2) {
    addVertex(vertex1);
    addVertex(vertex2);
    adjacencyList[vertex1].push_back(vertex2);
    adjacencyList[vertex2].push_back(vertex1);
  }

  vector<char> dfsRecursive(char startVertex, set<char>& visited, vector<char>& result) {
    visited.insert(startVertex);
    result.push_back(startVertex);

    for (char neighbor : adjacencyList[startVertex]) {
      if (visited.find(neighbor) == visited.end()) {
        dfsRecursive(neighbor, visited, result);
      }
    }

    return result;
  }

  vector<char> dfsIterative(char startVertex) {
    set<char> visited;
    stack<char> st;
    vector<char> result;

    visited.insert(startVertex);
    st.push(startVertex);

    while (!st.empty()) {
      char vertex = st.top();
      st.pop();
      result.push_back(vertex);

      for (char neighbor : adjacencyList[vertex]) {
        if (visited.find(neighbor) == visited.end()) {
          visited.insert(neighbor);
          st.push(neighbor);
        }
      }
    }

    return result;
  }

  bool hasCycle() {
    set<char> visited, recursionStack;

    for (auto& pair : adjacencyList) {
      if (visited.find(pair.first) == visited.end()) {
        if (dfsHasCycle(pair.first, visited, recursionStack)) {
          return true;
        }
      }
    }

    return false;
  }

  vector<vector<char>> getConnectedComponents() {
    set<char> visited;
    vector<vector<char>> components;

    for (auto& pair : adjacencyList) {
      if (visited.find(pair.first) == visited.end()) {
        vector<char> component;
        dfsComponent(pair.first, visited, component);
        components.push_back(component);
      }
    }

    return components;
  }
};

int main() {
  Graph graph;

  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('D', 'E');
  graph.addEdge('E', 'F');

  set<char> visited;
  vector<char> result;
  cout << "DFS (Recursive) from A: ";
  for (char c : graph.dfsRecursive('A', visited, result)) {
    cout << c << " ";
  }
  cout << endl;

  cout << "DFS (Iterative) from A: ";
  for (char c : graph.dfsIterative('A')) {
    cout << c << " ";
  }
  cout << endl;

  cout << "Has Cycle: " << (graph.hasCycle() ? "true" : "false") << endl;

  cout << "Connected Components: ";
  for (auto& component : graph.getConnectedComponents()) {
    for (char c : component) {
      cout << c << " ";
    }
    cout << "| ";
  }
  cout << endl;

  return 0;
}
`;

exports.dfsjava=`
// Depth-First Search (DFS) Algorithm
// DFS explores as far as possible along each branch before backtracking, using a stack or recursion

import java.util.*;


class Graph {
  private Map<Character, List<Character>> adjacencyList;

  public Graph() {
    this.adjacencyList = new HashMap<>();
  }

  public void addVertex(char vertex) {
    adjacencyList.putIfAbsent(vertex, new ArrayList<>());
  }

  public void addEdge(char vertex1, char vertex2) {
    addVertex(vertex1);
    addVertex(vertex2);
    adjacencyList.get(vertex1).add(vertex2);
    adjacencyList.get(vertex2).add(vertex1);
  }

  public List<Character> dfsRecursive(char startVertex) {
    Set<Character> visited = new HashSet<>();
    List<Character> result = new ArrayList<>();
    dfsRecursiveHelper(startVertex, visited, result);
    return result;
  }

  private void dfsRecursiveHelper(char vertex, Set<Character> visited, List<Character> result) {
    visited.add(vertex);
    result.add(vertex);

    for (char neighbor : adjacencyList.getOrDefault(vertex, new ArrayList<>())) {
      if (!visited.contains(neighbor)) {
        dfsRecursiveHelper(neighbor, visited, result);
      }
    }
  }

  public List<Character> dfsIterative(char startVertex) {
    Set<Character> visited = new HashSet<>();
    Stack<Character> stack = new Stack<>();
    List<Character> result = new ArrayList<>();

    visited.add(startVertex);
    stack.push(startVertex);

    while (!stack.isEmpty()) {
      char vertex = stack.pop();
      result.add(vertex);

      for (char neighbor : adjacencyList.getOrDefault(vertex, new ArrayList<>())) {
        if (!visited.contains(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }

    return result;
  }

  public boolean hasCycle() {
    Set<Character> visited = new HashSet<>();
    Set<Character> recursionStack = new HashSet<>();

    for (char vertex : adjacencyList.keySet()) {
      if (!visited.contains(vertex)) {
        if (dfsHasCycleHelper(vertex, visited, recursionStack)) {
          return true;
        }
      }
    }

    return false;
  }

  private boolean dfsHasCycleHelper(char vertex, Set<Character> visited, Set<Character> recursionStack) {
    visited.add(vertex);
    recursionStack.add(vertex);

    for (char neighbor : adjacencyList.getOrDefault(vertex, new ArrayList<>())) {
      if (!visited.contains(neighbor)) {
        if (dfsHasCycleHelper(neighbor, visited, recursionStack)) {
          return true;
        }
      } else if (recursionStack.contains(neighbor)) {
        return true;
      }
    }

    recursionStack.remove(vertex);
    return false;
  }

  public List<List<Character>> getConnectedComponents() {
    Set<Character> visited = new HashSet<>();
    List<List<Character>> components = new ArrayList<>();

    for (char vertex : adjacencyList.keySet()) {
      if (!visited.contains(vertex)) {
        List<Character> component = new ArrayList<>();
        dfsComponentHelper(vertex, visited, component);
        components.add(component);
      }
    }

    return components;
  }

  private void dfsComponentHelper(char vertex, Set<Character> visited, List<Character> component) {
    visited.add(vertex);
    component.add(vertex);

    for (char neighbor : adjacencyList.getOrDefault(vertex, new ArrayList<>())) {
      if (!visited.contains(neighbor)) {
        dfsComponentHelper(neighbor, visited, component);
      }
    }
  }

  public static void main(String[] args) {
    Graph graph = new Graph();

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    graph.addEdge('D', 'E');
    graph.addEdge('E', 'F');

    System.out.println("DFS (Recursive) from A: " + graph.dfsRecursive('A'));
    System.out.println("DFS (Iterative) from A: " + graph.dfsIterative('A'));
    System.out.println("Has Cycle: " + graph.hasCycle());
    System.out.println("Connected Components: " + graph.getConnectedComponents());
  }
}
`;