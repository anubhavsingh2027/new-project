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

exports.dijkstraCpp=`

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