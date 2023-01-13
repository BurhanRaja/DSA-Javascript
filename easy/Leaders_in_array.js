let n = [16, 17, 4, 3, 5, 2];

let output = [];

function leadersInArray(array, lastInd) {
  if (output[output.length - 1] === array[array.length - 1]) {
    return output;
  }
  let max = array.length - 1;
  for (
    let i = array.length - 1;
    lastInd > 0 ? i > lastInd : i >= lastInd;
    i--
  ) {
    if (array[i] > array[max]) {
      max = i;
    }
  }

  output.push(array[max]);
  return leadersInArray(array, max);
}

console.log(leadersInArray(n, 0));
