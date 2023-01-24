// let n = [1,2,3,5];
let n = [6,1,2,8,3,4,7,10,5];

// Easy
function findMissing(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr.includes(i+1)) {
            return i+1;
        }
    }
}

console.log(findMissing(n));