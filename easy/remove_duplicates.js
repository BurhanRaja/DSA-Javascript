// let str = "zvvo";
let str = "gfg";

function removeDup(str) {
    let string = "";
    for (let i = 0; i < str.length; i++) {
        if (!string.includes(str[i])) {
            string += str[i];
        }
    }
    console.log(string);
}

removeDup(str);