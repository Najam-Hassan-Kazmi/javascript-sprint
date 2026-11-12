function filterOutOddNumbers(arr) {
    return arr.filter((e) => e%2 == 0)
}

function filterObjectsByNameLength(arr, limit) {
    return arr.filter((e) => e.Name.length <= limit)  
}

function compoundFilter(arr) {
    let result = arr.filter((product) => {
        let ok = []
        if ((typeof(product.code) == "string") && (product.code.length > 5)) {
            if (!product.code.includes("special")) {
                if (product.price > 50) {
                    if (location != "Underground") {
                        return product
                    }
                }
            }
        }
         
    })
}