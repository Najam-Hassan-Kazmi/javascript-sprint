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

    for  (cost [key, value] of pairs) {
        newObj.key = value
    }

    return newObj
}