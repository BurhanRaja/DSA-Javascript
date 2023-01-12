// let n = [1, 2, 3, 4, 5];
let n = [11, 22, 33, 44, 55, 3, 45, 96, 123, 879, 3629, 38462];
let k = 96;

// Binary Search
function binarySearch(arr, k) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = parseInt(start + (end - start)/2);
        if (arr[mid] > k) {
            end = mid - 1;
        } else if (k > arr[mid]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

console.log(binarySearch(n, k));
