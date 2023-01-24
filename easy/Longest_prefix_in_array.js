// let arr = ["geeksforgeeks", "geeks", "geek", "geezer"];
// let arr = ["hello", "world"];
let arr = ["apple", "ape", "april"];

function longestPrefix(arr) {
  if (arr.length === 1) {
    return -1;
  }
  let commonPrefix = arr[0].split("");
  let array = arr[1].split("");

  if (arr.length > 2) {
    for (let i = 2; i < arr.length; i++) {
      commonPrefix = compare(commonPrefix, array);
      array = arr[i].split("");
    }
  } else {
    commonPrefix = compare(commonPrefix, array);
  }

  if (commonPrefix.length > 0) {
    console.log(commonPrefix.join(""));
  } else {
    console.log(-1);
  }
}

function compare(arr1, arr2) {
  let commonPrefix = [];
  if (arr1.length > arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        commonPrefix.push(arr2[i]);
      } else {
        return commonPrefix;
      }
    }
  } else {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] === arr2[i]) {
        commonPrefix.push(arr1[i]);
      } else {
        return commonPrefix;
      }
    }
  }
}

longestPrefix(arr);




// Second Solution (Efficient) using Binary Serach

function findMinStrLen(array, n) {
    let min = Number.POSITIVE_INFINITY;

    for (let i = 0; i < n; i++) {
        let l = (array[i]).split("").length
        if (l < min) {
            min = l;
        }
    }

    return min;
}

function allContainsPrefix(arr, n, str, start, end) {
    for (let i = 0; i < n; i++) {
        for (let j = start; j < end; j++) {
            let el = ((arr[i]).split(""))[j];
            let strEl = ((str).split(""))[i];
            if (el !== strEl); {
                return false
            }
        }
    }
    return true;
}

function commonPrefix(arr, n) {
    let index = findMinStrLen(arr, n);
    let prefix = "";

    let start = 0;
    let end = index;

    while (start <= end) {
        let mid = start + (end - start) / 2;

        if (allContainsPrefix(arr, arr.length, arr[0], start, mid)) {
            prefix = prefix + (arr[0]).substring(start, mid);
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return prefix;
}

console.log(commonPrefix(arr));