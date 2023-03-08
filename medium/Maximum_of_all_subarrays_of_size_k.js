function maxSubArr(arr, k) {
    for (let i = 0; i < arr.length - k + 1; i++) {
        let max = arr[i];
        for (let j = i; j < k+i; j++) {
            if (max < arr[j]) {
                max = arr[j];
            }
        }

        console.log(max);
    }
}

// let arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];
// let k = 3;

let arr = [8, 5, 10, 7, 9, 4, 15, 12, 90, 13];
let k = 4;

maxSubArr(arr, k);