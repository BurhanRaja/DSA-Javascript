let arr = [9, 5, 7, 3], k = 6;

function sumDivisibility(arr, k) {
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if ((arr[i] + arr[j])%k === 0) {
                flag = true;
            }
        }
    }

    return flag;
}

sumDivisibility(arr, k);