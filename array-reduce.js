function getTotalFromShoppingBasket(basket) {
    let price = 0
    basket.forEach((item) => price = price + item.price)
    return price
}

const shoppingBasket = [
  { name: "Apple", price: 2.5 },
  { name: "Banana", price: 1.5 },
  { name: "Orange", price: 3 },
  { name: "Mango", price: 4 },
]

console.log(getTotalFromShoppingBasket(shoppingBasket))

function getAverageAge(people) {
    let sum = 0
    people.forEach((p) => sum = sum + p.age)
    
    return sum / people.length
}

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
]

console.log(getAverageAge(people))


function concatenateObjects(obj) {
    const result = {
        
    }
    for (const[key, value] in obj) {
        
    }
}