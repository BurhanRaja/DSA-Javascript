// let arr = [1, 2, 1, 3, 4, 2, 3];
// let k = 4;
let arr = [4,1,1];
let k = 2;

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

countEl(arr, k);
