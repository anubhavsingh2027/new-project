exports.mergeSortAlgo = `
 function mergeSort(arr) {
if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));

}
  `;

exports.mergeSortCpp = `
#include <vector>
#include <algorithm>

std::vector<int> merge(std::vector<int> left, std::vector<int> right) {
  std::vector<int> result;
  int i = 0, j = 0;

  while (i < left.size() && j < right.size()) {
    if (left[i] <= right[j]) {
      result.push_back(left[i++]);
    } else {
      result.push_back(right[j++]);
    }
  }

  result.insert(result.end(), left.begin() + i, left.end());
  result.insert(result.end(), right.begin() + j, right.end());

  return result;
}

std::vector<int> mergeSort(std::vector<int> arr) {
  if (arr.size() <= 1) return arr;

  int mid = arr.size() / 2;
  std::vector<int> left(arr.begin(), arr.begin() + mid);
  std::vector<int> right(arr.begin() + mid, arr.end());

  return merge(mergeSort(left), mergeSort(right));
}
`;

exports.mergeSortJava = `
import java.util.*;

public class MergeSort {
  public static List<Integer> merge(List<Integer> left, List<Integer> right) {
    List<Integer> result = new ArrayList<>();
    int i = 0, j = 0;

    while (i < left.size() && j < right.size()) {
      if (left.get(i) <= right.get(j)) {
        result.add(left.get(i++));
      } else {
        result.add(right.get(j++));
      }
    }

    result.addAll(left.subList(i, left.size()));
    result.addAll(right.subList(j, right.size()));

    return result;
  }

  public static List<Integer> mergeSort(List<Integer> arr) {
    if (arr.size() <= 1) return arr;

    int mid = arr.size() / 2;
    List<Integer> left = mergeSort(new ArrayList<>(arr.subList(0, mid)));
    List<Integer> right = mergeSort(new ArrayList<>(arr.subList(mid, arr.size())));

    return merge(left, right);
  }
}
`;
exports.mergeSortJavaScript = `
function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
`;
exports.mergeSortPython = `
def merge(left, right):
    result = []
    i, j = 0, 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])

    return result

def mergeSort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = mergeSort(arr[:mid])
    right = mergeSort(arr[mid:])

    return merge(left, right)
`;
