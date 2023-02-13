// let arr = [1, 4, 3, 2, 6, 7];
// let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function minJumps(arr) {
    let i = arr[0];
    n = arr.length;
    let count = 1;

    while (i < n-1) {
        i += arr[i];
        count++;
    }

    console.log(count);

}

minJumps(arr);