// let a = [
//   [0, 1, 1, 1],
//   [0, 0, 1, 1],
//   [0, 0, 1, 1],
// ];

let a = [
  [0, 1],
  [1, 1],
];

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
  return index;
}

console.log(maxOnes(a));
