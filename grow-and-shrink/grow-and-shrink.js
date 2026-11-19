const body = document.body

const letterDiv = document.createElement("div")
letterDiv.classList.add("letter-container")

const buttonDiv = document.createElement("div")
buttonDiv.classList.add("button-container")

body.append(letterDiv, buttonDiv)

let selectedCh

for (let ch = 0; ch < 26; ch++) {
    ch = String.fromCodePoint(97 + ch)
    const div = document.createElement("div")
    div.setAttribute("id", ch)
    div.setAttribute("class", "letter")
    if (div.id === "f") {
        div.classList.toggle("selected")
    }
    div.innerText = ch.toUpperCase()
    letterDiv.append(div)
    ch = ch.codePointAt(0) - 97
}

let selected = letterDiv.querySelector(".selected")
selected.style.fontWeight = "bold"

const prev = document.createElement("button")
prev.innerText = "<"
prev.addEventListener("click", () => {
    let selected = letterDiv.querySelector(".selected")
    selected.classList.remove("selected")
    let newId = selected.id.codePointAt(0) - 1
    if (newId < 97) {
        newId += 26
    }
    let newSelected = letterDiv.querySelector("#" + String.fromCodePoint(newId))
    newSelected.classList.add("selected")
})

const next = document.createElement("button")
next.innerText = ">"
next.addEventListener("click", () => {
    let selected = letterDiv.querySelector(".selected")
    selected.classList.remove("selected")
    let newId = selected.id.codePointAt(0) + 1
    if (newId > 97) {
        newId -= 26
    }
    let newSelected = letterDiv.querySelector("#" + String.fromCodePoint(newId))
    console.log(newSelected.id)
    newSelected.classList.add("selected")
})

const inc = document.createElement("button")
inc.innerText = "+"
const dec = document.createElement("button")
dec.innerText = "-"

buttonDiv.append(prev, next, inc, dec)
