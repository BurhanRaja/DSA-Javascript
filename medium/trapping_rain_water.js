function trappingWaterBruteForce(arr) {
    // Caculate left and right bound on every traversal
    let res = 0;
   for (let i = 0; i < arr.length; i++) {
        // Left bound
        let leftB = arr[0];
        for (let j = 0; j < i+1; j++) {
            if (leftB < arr[j]) {
                leftB = arr[j];
            }
        }

        // Right Bound
        let rightB = arr[arr.length - 1];
        for (let j = i; j >= 0; j--) {
            if (arr[j] > rightB) {
                rightB = arr[j];
            }
        }

        res += Math.min(leftB, rightB) - arr[i];
   } 

   console.log(res);
}

// Calculating leftB and rightB at start
function trappingRainWater(arr) {
    let leftB = [];
    let rightB = [];
    let res = 0;

    // Left Bound
    leftB[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        leftB[i] = Math.max(leftB[i-1], arr[i]);
    }
    
    // Right Bound
    rightB[arr.length - 1] = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        rightB[i] = Math.max(rightB[i+1], arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        res += Math.min(leftB[i], rightB[i]) - arr[i];
    }

    console.log(res);
}





let arr = [3, 0, 0, 2, 0, 4];
trappingRainWater(arr);

