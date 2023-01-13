// let n = [1,2,3,5];
let n = [6,1,2,8,3,4,7,10,5];

function findMissing(array) {
    let i = 0;
    while (i < array.length) {
        let correct = array[i] - 1;
        if (!array.includes(correct) && correct !== 0 ) {
            return correct;
        }
        if (array[i]<array.length && array[i] !== array[correct]) {
            swap(array, i, correct);
        } else {
            i++;
        }
    }
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

console.log(findMissing(n));