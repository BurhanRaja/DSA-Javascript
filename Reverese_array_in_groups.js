let n = [1,2,3,4,5,6,8,9];
let k = 3;

let output = [];

// [3, 2, 1, 6, 5, 4, 9, 8]
  
// Reverse Array in Group
function reverse_array(arr, k, l) {
    if (l >= arr.length) {
        return output;
    }
    if ((arr.length - l) < k) {
        let slicedArr = arr.slice(l, arr.length);
        output = [...output, ...slicedArr.reverse()];
        l += k;
        return reverse_array(arr, k, l);
    } else {
        let slicedArr = arr.slice(l, k+l);
        output = [...output, ...slicedArr.reverse()];
        l += k;
        return reverse_array(arr, k, l)
    }
}

console.log(reverse_array(n, k, 0));