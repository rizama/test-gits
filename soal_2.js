const firstname = ["R", "I", "Z", "K", "Y"]
const lastname = ["S", "A", "M"]
let result = []

let count = lastname.length - 1 

function recurse(words) {
    if(count >= 0) {
        result.push(words[count])
        count--
        recurse(words);
    }
}

recurse(lastname)

console.log(lastname); //[ 'S', 'A', 'M' ]
console.log(result); //[ 'M', 'A', 'S' ] 