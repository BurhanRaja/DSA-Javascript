let arr = [2, 7, 4, 1, 6, 3, 5];

function isSorted(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}

function countConversion(arr) {
  let count = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    let flag = false;
    for (let j = 1; j < arr.length - i - 1; j++) {
      if (arr[j - 1] > arr[j]) {
        flag = true;
        swap(arr, i, j);
        count++;
      }
    }
    if (!flag) {
      break;
    }
  }
  return count;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

console.log(countConversion(arr));