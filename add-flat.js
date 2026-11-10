function sumNestedArray(arr) {
    let total = 0
    for (const value of arr.flat()) {
        if (typeof value === number) {
            total = total + value
        }
    }

    return total
}