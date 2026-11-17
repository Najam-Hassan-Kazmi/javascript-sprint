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
  
  if (people.length === 0) {
    return 0
  }

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


function concatenateObjects(arr) {
  const result = {}

  for ({key, value} of arr) {
    (result[key] ??= []).push(value)
  }

  return result

}


const objects = [
  { key: "a", value: 1 },
  { key: "b", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 4 },
  { key: "b", value: 5 },
]

console.log(concatenateObjects(objects))






// arr = {1:2,3:45,6:1,77:4}

// console.log("Hey", Object.entries(arr).map((e)=> {
//   if (e > 5) {
//     return e
//   } else {
//     return "No"
//   }
// }))