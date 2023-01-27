let arr = [1, 2, 1, 3, 4, 2, 3];
let k = 4;
// let arr = [4, 1, 1];
// let k = 2;

function countEl(arr, k) {
  let output = [];
  for (let i = 0; i < k; i++) {
    let hMap = new Map();
    for (let j = i; j < k + i; j++) {
      hMap.set(arr[j], 1);
    }
    output.push(hMap.size);
  }
  console.log(output);
}

function countEl2(arr, k) {
  let output = [];
  let hMap = new Map();

  for (let i = 0; i < k; i++) {
    if (hMap.has(arr[i])) {
      hMap.set(arr[i], hMap.get(arr[i]) + 1);
    } else {
      hMap.set(arr[i], 1);
    }
  }

  output.push(hMap.size);

  for (let i = k; i < arr.length; i++) {
    if (hMap.get(arr[i - k]) === 1) {
      hMap.delete(arr[i - k]);
    } else {
      hMap.set(arr[i - k], hMap.get(arr[i - k] - 1));
    }

    if (hMap.has(arr[i])) {
      hMap.set(arr[i], hMap.get(arr[i]) + 1)
    }
    else {
      hMap.set(arr[i], 1)
    };

    output.push(hMap.size);
  }

  console.log(output);
}

// countEl(arr, k);
countEl2(arr, k);
