let n1 = [1, 2, 5, 4, 0];
let n2 = [2, 4, 5, 1, 6];

let output = [];

function check_equal_array(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return 0;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
        return 0;
      }
  }

  return 1;
}

console.log(check_equal_array(n1, n2));
