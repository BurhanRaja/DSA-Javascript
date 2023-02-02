let a = "geeksforgeeks";
let patt = "set";

function minimumIndexedChar(str, patt) {
  let arrStr = str.split("");
  let pattStr = patt.split("");
  for (let i = 0; i < arrStr.length; i++) {
    if (pattStr.includes(arrStr[i])) {
      return i;
    }
  }
  return -1;
}

console.log(minimumIndexedChar(a, patt));
