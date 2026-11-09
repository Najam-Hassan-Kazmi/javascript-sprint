function getValueFromKey(obj, key) {
    return obj.key
}

function addKeyValuePairs(obj, pairs) {
    const newObj = JSON.Parse(JSON.stringify(obj))

    for  (cost [key, value] of pairs) {
        newObj.key = value
    }

    return newObj
}