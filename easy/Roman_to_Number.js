let s = "V";

function romanToNum(s) {
    let obj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    s = s.split("");
    let sum = 0;

    s.forEach(str => {
        if (Object.keys(obj).includes(str)) {
            sum += obj[str];
        }
    });

    console.log(sum);
}

romanToNum(s);