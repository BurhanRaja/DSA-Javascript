let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];

function rotateMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].reverse();
  }

  console.log(arr);
}

rotateMatrix(mat);
