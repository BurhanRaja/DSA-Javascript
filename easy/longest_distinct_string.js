// let str = "geeksforgeeks";
let str = "aaa";

function longestStr(str) {
    let sStr = [];
    let string = "";
    let max = 0;

    for (let i = 0; i < str.length; i++) {
        if (string.includes(str[i])) {
            sStr.push(string);
            string = str[i];
        } else {
            string += str[i];
        }
    }

    for (let i = 0; i < sStr.length; i++) {
        if (sStr[i].split("").length > sStr[max].length) {
            max = i
        }
    }

    console.log(sStr[max]);
}

longestStr(str);