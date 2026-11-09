function getFirstElement(str, arr = []) {
    if (arr.length === 0) {
        return str[0]
    } else {
        return arr[0]
    }
}

function getLastElement(str, arr = []) {
    if (arr === []) {
        return str[str.length-1]
    } else {
        return arr[arr.length-1]
    }
}

function getElementByIndex(str, arr = [], i) {
    if (arr === []) {
        return str[i]
    } else {
        return arr[i]
    }
}