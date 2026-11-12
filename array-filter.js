function filterOutOddNumbers(arr) {
    return arr.filter((e) => e%2 == 0)
}

function filterObjectsByNameLength(arr, limit) {
    return arr.filter((e) => {
        console.log(e.Name.length)
        if (e.Name.length <= limit) {
            return e
        }
    })  
}

function compoundFilter(arr) {
    let result = arr.filter((product) => {
        if ((typeof(product.code) == "string") && (product.code.length > 5)) {
            if (!product.code.includes("special")) {
                if (product.price > 50) {
                    if (product.location != "Underground") {
                        return product
                    }
                }
            }
        }
    })

    return result
}