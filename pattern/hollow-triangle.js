function hollowTriangle(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        str += "*";
      } else if (i === n - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

hollowTriangle(5);
