function getElementsByTag(tagName) {
    return document.getElementsByTagName(tagName)
}

function getElementsByClassName(className) {
    return document.getElementsByClassName(className)
}

function getElementById(id) {
    return document.getElementById(id)
}

function getElementsByAttribute(attribute, attributeValue) {

    if (attributeValue === undefined) {
        let parameter = "[" + attribute + "]"
        return document.querySelectorAll(parameter)
    } else {
        let parameter = "[" + attribute + "=" + "]"
        return document.querySelectorAll(parameter)
    }
}