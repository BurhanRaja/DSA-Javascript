let a = [1, 1, 2, 2, 3, 3, 4, 50, 50, 65, 65];

function searchOneEl(arr, start, end) {
  if (start > end) {
    return;
  }

  if (start === end) {
    return arr[start];
  }
  let mid = start + (end - start) / 2;

  if (mid % 2 === 0) {
    if (arr[mid] === arr[mid + 1]) {
      return searchOneEl(arr, mid + 2, end);
    } else {
      return searchOneEl(arr, start, mid);
    }
  } else {
    if (arr[mid] === arr[mid - 1]) {
      return searchOneEl(arr, mid + 1, end);
    } else {
      return searchOneEl(arr, start, mid - 1);
    }
  }
}

console.log(searchOneEl(a, 0, a.length - 1));
