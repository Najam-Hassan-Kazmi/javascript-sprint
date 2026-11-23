const body = document.body

const contentDiv = document.createElement("div")
contentDiv.id = "content"
const p = document.createElement("p")
p.innerText = "code"
contentDiv.append(p)

const buttonsDiv = document.createElement("div")
buttonsDiv.classList.add("controls")

body.append(contentDiv, buttonsDiv)


const bButton = document.createElement("button")
bButton.innerText = "B"
bButton.id = "bold"
bButton.addEventListener("click", () => {
    p.classList.toggle("bold")
    const classCheck = contentDiv.querySelector(".bold")
    if (classCheck) {
        p.style.fontWeight = "bold"
    } else {
        p.style.fontWeight = "normal"
    }
})

const iButton = document.createElement("button")
iButton.innerText = "I"
iButton.id = "italic"
iButton.addEventListener("click", () => {
    p.classList.toggle("italic")
    const classCheck = contentDiv.querySelector(".italic")
    if (classCheck) {
        p.style.fontStyle = "italic"
    } else {
        p.style.fontStyle = "normal"
    }
})

const uButton = document.createElement("button")
uButton.innerText = "U"
uButton.id = "underline"
uButton.addEventListener("click", () => {
    p.classList.toggle("underline")
    const classCheck = contentDiv.querySelector(".underline")
    if (classCheck) {
        p.style.textDecoration = "underline"
    } else {
        p.style.textDecoration = "none"
    }
})

const hButton = document.createElement("button")
hButton.innerText = "H"
hButton.id = "highlight"
hButton.addEventListener("click", () => {
    p.classList.toggle("highlight")
    const classCheck = contentDiv.querySelector(".highlight")
    if (classCheck) {
        p.style.backgroundColor = "yellow"
    } else {
        p.style.backgroundColor = "white"
    }
})

buttonsDiv.append(bButton, iButton, uButton, hButton)
