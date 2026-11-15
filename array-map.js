function concatenateStrings(arr, limit) {
    const result = arr.map((s) => s.length > 5 ? s.slice(0, limit) + "..." : s)
    return result
}

const strings = ["apple", "banana", "kiwi", "orange", "pineapple"];

console.log(concatenateStrings(strings, 5))