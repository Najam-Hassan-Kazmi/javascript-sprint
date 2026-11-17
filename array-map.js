function convert2DArrayToObjectArray(arr) {
    const result = []
    arr.forEach((e) => {
        result.push({[e[0]]: e[1]})
    })

    return result
}

const data = [
  ["name", "Alice"],
  ["age", 30],
  ["city", "New York"],
];

console.log(convert2DArrayToObjectArray(data))
// _____________________________

function convertArrayOfObjectsToStrings(arr) {
    const result = arr.map((e) => {

        let line = ""

        for (let propt in e) {
            let Key = propt[0].toUpperCase() + propt.slice(1, propt.length)
            line += Key + ": " + e[propt] + ", "
        }

        line = line.slice(0, line.length-2)
        return line
    })

    return result
}

const objects = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 25, city: "Los Angeles" },
]

console.log(convertArrayOfObjectsToStrings(objects))
// ________________________________

function concatenateStrings(arr, limit) {
    const result = arr.map((s) => s.length > 5 ? s.slice(0, limit) + "..." : s)
    return result
}

const strings = ["apple", "banana", "kiwi", "orange", "pineapple"];

console.log(concatenateStrings(strings, 5))