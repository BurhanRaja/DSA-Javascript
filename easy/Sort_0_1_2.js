// let n = [0, 2, 1, 2, 0];
let n = [0, 1, 0];

let output = [];

// nod = Number of Digits to sorted for more than 2 in an array;

function sortArr(array, nod) {
  for (let i = 0; i < nod; i++) {
    if (array.includes(i)) {
      let tempArr = array.filter((el) => el === i);
      output = [...output, ...tempArr];
    }
  }
  return output;
}

console.log(sortArr(n, 3));
