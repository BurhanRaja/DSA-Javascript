let a = [6, 1, 9, 5, 4];
let b = [3, 4, 8, 2, 4];

// Remove the array item
function removeArrayItem(arr, num) {
  let idx = arr.indexOf(num);
  if (idx !== -1) {
    arr.splice(idx, 1);
  }
  return arr;
}

// Find Max Item
function maxItem(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Find Min Item
function minItem(arr) {
  let min = arr[arr.length - 1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Minimize Sum Product
function minimizeSumProduct(arr1, arr2, n) {
  let i = 0;
  sum = 0;
  while (i < n) {
    let minNum = minItem(arr1);
    let maxNum = maxItem(arr2);

    sum += minNum * maxNum;

    arr1 = removeArrayItem(arr1, minNum);
    arr2 = removeArrayItem(arr2, maxNum);

    i++;
  }
  console.log(sum);
}

minimizeSumProduct(a, b, a.length);
