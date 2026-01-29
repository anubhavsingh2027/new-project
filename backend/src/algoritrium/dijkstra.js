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
