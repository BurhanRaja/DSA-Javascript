let arr1 = [11, 1, 13, 21, 3, 7];
let arr2 = [11, 3, 7, 1];

function arraySubset(arr1, arr2) {
  if (arr1.length > arr2.length) {
    for (let i = 0; i < arr2.length; i++) {
      if (!arr1.includes(arr2[i])) {
        return false;
      }
    }
    return true;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
        return false;
      }
    }
    return true;
  }
}

console.log(arraySubset(arr1, arr2));