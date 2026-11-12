function filterOutOddNumbers(arr) {
    return arr.filter((e) => e%2 == 0)
}

function filterObjectsByNameLength(arr, limit) {
    return arr.filter((e) => e.name.length <= limit)  
}

function compoundFilter(arr) {
    let result = arr.filter((product) => {
        
        if (
            ((typeof(product.code) == "string") && (product.code.length > 5))
            && (!product.category.includes("special"))
            && (product.price > 50)
            && (product.location != "Underground")
        ) {
                        return product
        }

    })

    return result
}

const products = [
  {
    code: "ABC123",
    category: "electronics",
    price: 75,
    location: "Store",
  },
  {
    code: "XYZ456",
    category: "clothing",
    price: 30,
    location: "Mall",
  },
  {
    code: "PQR789",
    category: "special items",
    price: 60,
    location: "Underground",
  },
  {
    code: "LMN012",
    category: "accessories",
    price: 90,
    location: "Street",
  },
]

console.log(compoundFilter(products))
