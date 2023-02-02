function uniqueRows(arr) {
    let array = [];
    let temp = [];
    for(let i = 0; i < arr.length; i++) {
        let a = "";
        for (let j = 0; j < arr[i].length; j++) {
            a += arr[i][j];
        }
        let num = parseInt(a, 2);
        if (!temp.includes(num)) {
            temp.push(num);
            array.push(arr[i]);
        }
    }
    return array;
}

let arr = [[1, 1, 0, 1],[1, 0, 0, 1],[1, 1, 0, 1]];

console.log(uniqueRows(arr));