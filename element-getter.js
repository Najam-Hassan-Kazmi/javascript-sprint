function getFirstElement(x) {
    if (x.length === 0) {
        return undefined
    }
    
    return x[0]
}

function getLastElement(x) {
    if (x.length === 0) {
        return undefined
    }
    
    return x[x.length-1]
}

function getElementByIndex(x, i) {
    if (typeof i !== "number") {
        return undefined
    }
    if (x.length === 0) {
        return undefined
    }
    
    return x[i]
}