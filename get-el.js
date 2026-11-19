function getElementByTag(tagName) {
    return document.getElementsByTagName(tagName)
}

function getElementsByClassName(className) {
    return document.getElementByClassName(className)
}

function getElementById(id) {
    return document.getElementById(id)
}

function getElementByAttribute(attribute, attributeValue) {

    let parameter
    if (attributeValue === undefined) {
        parameter = "[" + attribute + "]"
    } else {
        parameter = "[" + attribute + "=" + "]"
    }

    return document.querySelectorAll(parameter)
}