let n = 6;
let arr = [1, 2, 3, -2, 5];

function kadaneAlgo(arr) {
  let max_so_far = Number.MIN_VALUE;
  let max_ending_here = 0;

  for (let i = 0; i < arr.length; i++) {
    max_ending_here += arr[i];
    if (max_ending_here > max_so_far) {
      max_so_far = max_ending_here;
    }
    if (max_ending_here < 0) {
      max_ending_here = 0;
    }
  }

  console.log(max_so_far);
}

kadaneAlgo(arr);
