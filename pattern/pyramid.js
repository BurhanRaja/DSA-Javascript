function pyramid(n) {
  let total = n * 2 + 1;
  let start = parseInt(total / 2);
  let end = parseInt(total / 2);

  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < total; j++) {
      if (j >= start && j <= end) {
        str += "*";
      } else {
        str += " ";
      }
    }
    start--;
    end++;
    console.log(str);
  }
}

pyramid(5);
