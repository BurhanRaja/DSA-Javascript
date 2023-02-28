// Input:
// K = 2, N = 4
// Arr[] = {1, 5, 8, 10}

// Output:
// 5

// Explanation:
// The array can be modified as
// {3, 3, 6, 8}. The difference between
// the largest and the smallest is 8-3 = 5.

let arr = [3, 9, 12, 16, 20];
k = 3;

function minmizeHeight(arr, k) {
  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    arr[i] = k >= arr[i] ? k + arr[i] : arr[i] - k;
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);
  }

  console.log(max - min);
}

// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// function findMin(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }

minmizeHeight(arr, k);
