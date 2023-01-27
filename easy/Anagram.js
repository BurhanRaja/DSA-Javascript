// Two strings should have same characters

let a = "geeksforgeeks";
let b = "forgeeksgeeks";
// let a = "allergy";
// let b = "allergic";

function isAnagram(a, b) {
  let arrA = a.split("");
  let arrB = b.split("");

  for (let i = 0; i < arrA.length; i++) {
    if (!arrB.includes(arrA[i]) && arrB.length !== arrA.length) {
      return "NO";
    }
  }
  return "YES";
}




console.log(isAnagram(a, b));
