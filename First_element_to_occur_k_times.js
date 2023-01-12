let n = [1, 7, 4, 3, 4, 8, 7];
let k = 2;

function first_element_occur_k_times(arr, k) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);

      // Check
      let ans = getKey(map, k);
      if (ans) {
        return ans;
      }
    } else {
      map.set(arr[i], 1);
    }
  }
  return -1;
}

function getKey(map, k) {
  for (let [key, value] of map.entries()) {
    if (value === k) return key;
  }
}

console.log(first_element_occur_k_times(n, k));
