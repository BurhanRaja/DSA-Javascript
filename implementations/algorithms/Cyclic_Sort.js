function cyclicSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i] - 1;
        if (arr[i] !== arr[index]) {
            swap(arr, i, index);
        }
    }
    console.log(arr);
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

let arr = [4, 2, 1, 3, 5, 9, 6, 8, 7];

cyclicSort(arr);