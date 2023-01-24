let array = [15, -2, 2, -8, 1, 7, 10, 23];

function longestSubarray(arr) {
  let sum = 0;
  let max_len = 0;
  let hMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (arr[i] === 0 && max_len === 0) {
      max_len = 1;
    }

    if (sum === 0) {
      max_len = i + 1;
    }

    let prev_i = hMap.get(sum);

    if (prev_i !== undefined) {
      max_len = Math.max(max_len, i - prev_i);
    } else {
      hMap.set(sum, i);
    }
  }
  console.log(max_len);
}

longestSubarray(array);
