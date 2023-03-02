function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let last = arr.length - i - 1;
    let max = maxNum(arr, 0, last);
    swap(arr, max, last);
  }

  console.log(arr);
}

function maxNum(arr, start, end) {
  let max = 0;
  for (let i = start; i < end; i++) {
    if (arr[i] > arr[max]) {
      max = i;
    }
  }

  return max;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

let arr = [9, 2, 9, 3, 7, 1, 2, 1, 8, 2];

selectionSort(arr);
