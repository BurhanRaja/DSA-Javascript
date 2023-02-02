let str = "{([])}";

function parenthesisChecker(str) {
    let i = 0;
    str = str.split("");
    let arr = [];

    while (i < str.length && (str[i] === "{" || str[i] === "[" || str[i] === "(")) {
        arr.push(str[i]);
        i++;
    }

    while (i < str.length) {
        let temp = arr.pop();
        if (!checker(temp, str[i])) {
            return false;
        }
        i++;
    }

    return true;
}

function checker(a, b) {
    return a === "(" && b === ")" || a === "{" && b === "}" || a === "[" && b === "]";
}

console.log(parenthesisChecker(str))