function getValueFromKey(obj, key) {
    for (const [k,v] of Object.entries(obj)) {
        if (k === key) {
            return v
        }
    }
    
    return undefined
}

function addKeyValuePairs(obj, pairs) {
    const newObj = JSON.parse(JSON.stringify(obj))


    for  (const [key, value] of Object.entries(pairs)) {
        newObj[key] = value
    }

    return newObj
}

const location = {
  city: 'Tallinn',
  country: 'Estonia',
  name: {
    first: "najam",
    second: "ul",
    last: "hassan"
  }
}

const a = {...location}

a.name.last = "Finland"

console.log(addKeyValuePairs(location, {airports: [ 'TLL' ], 1: 3, add: "noadd", sub: 189}))