function insertionSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }

    console.log(arr);
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

let arr = [9, 2, 9, 3, 7, 1, 2, 1, 8, 2];

insertionSort(arr);