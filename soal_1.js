const arr = [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
let [result, temp] = [0, 0]
for (const item of arr) {
    if (item == 1) {
        temp += 1
        if (temp > result) result = temp
    } else {
        temp = 0
    }
}

console.log(result) //19