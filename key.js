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

    for  (const [key, value] of Object.entries(obj)) {
        newObj.key = value
    }

    return newObj
}