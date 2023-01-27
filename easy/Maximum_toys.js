// let arr = [1, 12, 5, 111, 200, 1000, 10];
// let k = 50;
let arr = [20, 30, 50];
let k = 100;

function maxToys(arr, k) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (k >= arr[i] && k !== 0) {
      k -= arr[i];
      ans.push(arr[i]);
    }
  }
  console.log(ans.length);
}

maxToys(arr, k);
