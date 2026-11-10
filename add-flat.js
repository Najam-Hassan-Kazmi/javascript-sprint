function sumNestedArray(arr) {
    let sum = 0
    for (const value of arr.flat(Infinity)) {
        if (typeof value === "number") {
            sum = sum + value
        }

        console.log(sum)
    }
    return sum
}

console.log(sumNestedArray(["r6t", "3Lc", 47, 89, "J2B", 27, 79, 113]))