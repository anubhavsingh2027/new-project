export const dijkstraAlgo = (graph, start) => {
  const distances = {};
  const visited = new Set();
  const previous = {};

  for (const node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[start] = 0;

  while (visited.size < Object.keys(graph).length) {
    let minNode = null;
    let minDistance = Infinity;

    for (const node in distances) {
      if (!visited.has(node) && distances[node] < minDistance) {
        minNode = node;
        minDistance = distances[node];
      }
    }

    if (minNode === null) break;
    visited.add(minNode);

    for (const neighbor in graph[minNode]) {
      const newDistance = distances[minNode] + graph[minNode][neighbor];
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        previous[neighbor] = minNode;
      }
    }
  }

  return { distances, previous };
};

exports.dijkstraJavascript = `
export const dijkstraAlgo = (graph, start) => {
  const distances = {};
  const visited = new Set();
  const previous = {};

  for (const node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[start] = 0;

  while (visited.size < Object.keys(graph).length) {
    let minNode = null;
    let minDistance = Infinity;

    for (const node in distances) {
      if (!visited.has(node) && distances[node] < minDistance) {
        minNode = node;
        minDistance = distances[node];
      }
    }

    if (minNode === null) break;
    visited.add(minNode);

    for (const neighbor in graph[minNode]) {
      const newDistance = distances[minNode] + graph[minNode][neighbor];
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        previous[neighbor] = minNode;
      }
    }
  }

  return { distances, previous };
};
`;

exports.dijkstraCpp = `

#include <iostream>
#include <unordered_map>
#include <vector>
#include <limits>
#include <set>

using namespace std;

struct Graph {
  unordered_map<string, vector<pair<string, int>>> adj;
};

pair<unordered_map<string, int>, unordered_map<string, string>> dijkstra(const Graph& graph, const string& start) {
  unordered_map<string, int> distances;
  unordered_map<string, string> previous;
  set<string> visited;

  for (const auto& node : graph.adj) {
    distances[node.first] = INT_MAX;
    previous[node.first] = "";
  }
  distances[start] = 0;

  while (visited.size() < graph.adj.size()) {
    string minNode = "";
    int minDistance = INT_MAX;

    for (const auto& node : distances) {
      if (visited.find(node.first) == visited.end() && node.second < minDistance) {
        minNode = node.first;
        minDistance = node.second;
      }
    }

    if (minNode.empty()) break;
    visited.insert(minNode);

    for (const auto& edge : graph.adj.at(minNode)) {
      const string& neighbor = edge.first;
      int weight = edge.second;
      int newDistance = distances[minNode] + weight;

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        previous[neighbor] = minNode;
      }
    }
  }

  return {distances, previous};
}

`;

exports.dijkstraPython = `
def dijkstra(graph, start):
  distances = {}
  visited = set()
  previous = {}

  for node in graph:
    distances[node] = float('inf')
    previous[node] = None
  distances[start] = 0

  while len(visited) < len(graph):
    min_node = None
    min_distance = float('inf')

    for node in distances:
      if node not in visited and distances[node] < min_distance:
        min_node = node
        min_distance = distances[node]

    if min_node is None:
      break
    visited.add(min_node)

    for neighbor in graph[min_node]:
      new_distance = distances[min_node] + graph[min_node][neighbor]
      if new_distance < distances[neighbor]:
        distances[neighbor] = new_distance
        previous[neighbor] = min_node

  return distances, previous
`;
exports.dijkstraJava = `
import java.util.*;

public class Dijkstra {
  static class Graph {
    Map<String, Map<String, Integer>> adj = new HashMap<>();
  }

  static class Result {
    Map<String, Integer> distances;
    Map<String, String> previous;

    Result(Map<String, Integer> distances, Map<String, String> previous) {
      this.distances = distances;
      this.previous = previous;
    }
  }

  static Result dijkstra(Graph graph, String start) {
    Map<String, Integer> distances = new HashMap<>();
    Map<String, String> previous = new HashMap<>();
    Set<String> visited = new HashSet<>();

    for (String node : graph.adj.keySet()) {
      distances.put(node, Integer.MAX_VALUE);
      previous.put(node, null);
    }
    distances.put(start, 0);

    while (visited.size() < graph.adj.size()) {
      String minNode = null;
      int minDistance = Integer.MAX_VALUE;

      for (String node : distances.keySet()) {
        if (!visited.contains(node) && distances.get(node) < minDistance) {
          minNode = node;
          minDistance = distances.get(node);
        }
      }

      if (minNode == null) break;
      visited.add(minNode);

      for (String neighbor : graph.adj.get(minNode).keySet()) {
        int weight = graph.adj.get(minNode).get(neighbor);
        int newDistance = distances.get(minNode) + weight;

        if (newDistance < distances.get(neighbor)) {
          distances.put(neighbor, newDistance);
          previous.put(neighbor, minNode);
        }
      }
    }

    return new Result(distances, previous);
  }
}
`;
