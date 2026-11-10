function sumNestedArray(arr) {
    let total = 0
    for (const value of arr.flat()) {
        if (typeof value === "number") {
            total = total + value
        }

        console.log(total)
    }
    return total
}