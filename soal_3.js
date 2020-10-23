const symbols_1 = "{[()]}"
const symbols_2 = "{[(])}"
const symbols_3 = "{(([])[])[]}"

let matchingBracket = (str) => {

    if (str.length % 2 != 0) return "NO"

    let stack = [];

    let open = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    for (const char of str) {
        if (open[char]) {
            stack.push(char);
        } else {
            if (open[stack.pop()] !== char) return "NO";
        }
    }

    return stack.length === 0 ? "YES" : "NO";
}

console.log(matchingBracket(symbols_1)); //YES
console.log(matchingBracket(symbols_2)); //NO
console.log(matchingBracket(symbols_3)); //YES
