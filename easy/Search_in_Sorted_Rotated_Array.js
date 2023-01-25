// let a = [5, 6, 7, 8, 9, 10, 1, 2, 3];
let a = [3, 5, 1, 2];
// let key = 10;
let key = 1;

function getArrayNum(arr) {
  let num = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      num = i;
    }
  }
  return num;
}

function binarySearch(arr, start, end, k) {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] < k) {
      start = mid + 1;
    } else if (arr[mid] > k) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function searchRotatedArr(arr, k) {
  if (k > arr[0]) {
    let end = getArrayNum(arr);
    return binarySearch(arr, 0, end, k);
  } else {
    let start = getArrayNum(arr) + 1;
    return binarySearch(arr, start, arr.length - 1, k);
  }
}

console.log(searchRotatedArr(a, key));
