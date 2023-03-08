function spiralTraversal(arr, row, col) {
  let top = 0,
    left = 0,
    bottom = row - 1,
    right = col - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      console.log(arr[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      console.log(arr[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        console.log(arr[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        console.log(arr[i][left]);
      }
      left++;
    }
  }
}

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
spiralTraversal(arr, 4, 4);
