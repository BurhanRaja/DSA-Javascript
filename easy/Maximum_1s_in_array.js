let a = [
  [0, 1, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 1, 1],
  [1, 1, 1, 1],
];

// let a = [
//   [0, 1],
//   [1, 1],
// ];

// First Solution
function maxOnes(arr) {
  let max = 0;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    let ones = arr[i].filter((el) => el === 1);
    if (ones.length > max) {
      max = ones.length;
      index = i;
    }
  }
  console.log(index);
}

// Second Solution
function maxOnes2(arr) {
  let max = 0;
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      index = i;
    }
  }
  console.log(index);
}

maxOnes(a);
maxOnes2(a);
