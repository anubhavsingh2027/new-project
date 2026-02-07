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
