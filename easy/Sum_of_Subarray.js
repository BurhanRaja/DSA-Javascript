// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = [1,2,3,7,5];
let s = 12;


// Naive
function subarray_sum1(arr, s) {
  for (let i = 0; i < arr.length; i++) {
    let currSum = arr[i];

    if (currSum === s) {
      return i + 1;
    }

    for (let j = i + 1; j < arr.length; j++) {
      currSum += arr[j];
      if (currSum === s) {
        return [i + 1, j + 1];
      }
    }
  }

  return -1;
}


// Efficient
function subarray_sum2(arr, sum) {

  let currSum = arr[0];
  let start = 0;

  for (let i = 1; i <= arr.length; i++) {

    while (currSum > sum && start < i - 1) {
      currSum -= arr[start];
      start++;
    }

    if (currSum === sum) {
      return [start+1, i];
    }

    if (i < arr.length) {
      currSum += arr[i];
    }
  }

  return -1;
}

console.log(subarray_sum2(n, s));
