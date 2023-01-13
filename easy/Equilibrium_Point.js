let n = [1, 3, 5, 2, 2];

// The sum of left and right should be same

function equilibriumPoint(array) {
  let leftSum = 0;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  for (let i = 0; i < array.length; i++) {
    sum -= array[i];

    if (leftSum === sum) {
      return array[i];
    }

    leftSum += array[i];
  }

  return -1;
}

console.log(equilibriumPoint(n));
