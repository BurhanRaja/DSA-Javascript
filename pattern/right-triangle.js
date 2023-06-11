function rightTriangle(n) {
  for (let i = n - 1; i >= 0; i--) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (j >= i) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

rightTriangle(5);
