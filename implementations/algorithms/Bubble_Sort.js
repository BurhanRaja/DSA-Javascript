function bubbleSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let flag = false;
    for (let j = 1; j < n - i - 1; j++) {
      if (arr[j-1] > arr[j]) {
        swap(arr, j, j-1);
        flag = true;
      }
    }

    if (!flag) {
      break;
    }
  }

  console.log(arr);
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

let arr = [9, 2, 9, 3, 7, 1, 2, 1, 8, 2];

bubbleSort(arr, arr.length);
