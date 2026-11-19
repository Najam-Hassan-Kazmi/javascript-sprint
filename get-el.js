function getElementsByTag(tagName) {
    return document.getElementsByTagName(tagName)
}

function getElementsByClassName(className) {
    return document.querySelectorAll(className)
}

function getElementById(id) {
    return document.getElementById(id)
}

function getElementsByAttribute(attribute, attributeValue) {

    let parameter
    if (attributeValue === undefined) {
        parameter = "[" + attribute + "]"
    } else {
        parameter = "[" + attribute + "=" + "]"
    }

    return document.querySelectorAll(parameter)
}