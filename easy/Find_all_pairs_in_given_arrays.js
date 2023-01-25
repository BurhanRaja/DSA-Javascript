let a = [1, 2, 4, 5, 7];
let b = [5, 6, 3, 4, 8]; 


function findPairs(arr1, arr2, x) {
    let array = [];

    for (let i = 0; i < arr1.length; i++) {
        let num = arr2.find((el) => (x - arr1[i]) === el);
        if (num) {
            array.push([arr1[i], num]);
        }
    }

    console.log(array);
}

findPairs(a, b, 9);