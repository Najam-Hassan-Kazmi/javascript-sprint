const original =  {
  name: "John Doe",
  age: 30,
  city: "New York",
  hobbies: [
    "reading",
    "cooking",
    "hiking",
  ],
  address: {
    street: "123 Main Street",
    zipCode: "10001",
  },
}

let shallowCopy = {}
shallowCopy = Object.assign(shallowCopy, original)
const deepCopy = JSON.parse(JSON.stringify(original))

shallowCopy.address.zipCode = "najam"


console.log(original)
console.log(shallowCopy)
console.log(deepCopy)
