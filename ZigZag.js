let n = [4, 3, 7, 8, 6, 2, 1];

// Sorting Method
function zigZag1(array) {
  let sortedArr = array.sort((a, b) => a - b);
  for (let i = 1; i < sortedArr.length - 1; i += 2) {
    swap(sortedArr, i, i + 1);
  }
  return sortedArr;
}

// Optimized Method
function zigZag2(array) {
  let flag = true;
  for (let i = 0; i < array.length - 2; i++) {
    if (!flag) {
      if (array[i] < array[i + 1]) {
        swap(array, i, i + 1);
      }
    } else {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
      }
    }
    flag = !flag;
  }
  return array;
}

// swapping function
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
