let s = "i.like.this.program.very.much";

function reverseSentence1(s) {
  s = s.split(".");
  s = s.reverse();
  s = s.join(".");

  console.log(s);
}

reverseSentence1(s);

function reverseSentence2(s) {
  s = s.split(".");
  let n = s.length;
  let stk = [];
  for (let i = 0; i < n; i++) {
    stk.push(s.pop());
  }

  console.log(stk.join("."));
}

reverseSentence2(s);
