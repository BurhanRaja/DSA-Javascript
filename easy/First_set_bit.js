let n = 18;

function convertDecimalToBinary(num) {
  let binaryNum = "";
  while (num > 0) {
    // if (num & 1) {
    //     binaryNum = "1" + binaryNum;
    // } else {
    //     binaryNum = "0" + binaryNum;
    // }
    //  num = num >> 1;

    let temp = num % 2;
    if (temp === 1) {
      binaryNum = "1" + binaryNum;
    } else {
      binaryNum = "0" + binaryNum;
    }
    num = Math.floor(num / 2);
  }
 return binaryNum;
}

function firstSetBit(num) {
    let bNum = convertDecimalToBinary(num);
    console.log(bNum);
    let count = 0;
    for (let i = bNum.length; i > 0; i--) {
        if (bNum[i] === "1") {
            break;
        }
        count++;
    }

    console.log(count);
}

firstSetBit(n);
