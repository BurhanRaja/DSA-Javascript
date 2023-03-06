function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    let mid = arr.length / 2;

    let left = mergeSort(arr.slice(0, mid));
    
    let right = mergeSort(arr.slice(mid, arr.length));

    return merge(left, right);
}

function merge(left, right) {
    let mix = [];
    
    let i = 0;
    let j = 0;
    let k = 0;

    while (i< left.length && j < right.length) {
        if (left[i] < right[j]) {
            mix[k] = left[i];
            i++;
        } else {
            mix[k] = right[j];
            j++;
        }
        k++;
    }
    while (i < left.length) {
        mix[k] = left[i];
        k++;
        i++;
    }
    while (j < right.length) {
        mix[k] = right[j];
        k++;
        j++;
    }
    return mix;
}

let arr = [9, 2, 9, 3, 7, 1, 2, 1, 8, 2];

console.log(mergeSort(arr, 0, arr.length-1));