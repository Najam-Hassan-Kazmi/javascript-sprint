const body = document.body

const letterDiv = document.createElement("div")
letterDiv.classList.add("letter-container")

const buttonDiv = document.createElement("div")
buttonDiv.classList.add("button-container")

body.append(letterDiv, buttonDiv)

let currentSize = 14

for (let ch = 0; ch < 26; ch++) {
    ch = String.fromCodePoint(97 + ch)
    const div = document.createElement("div")
    div.setAttribute("id", ch)
    div.setAttribute("class", "letter")
    if (div.id === "a") {
        div.classList.toggle("selected")
        div.style.fontWeight = "bold"
    }
    div.dataset.size = "14"
    div.innerText = ch.toUpperCase()
    div.style.fontSize = currentSize + "px"
    letterDiv.append(div)
    ch = ch.codePointAt(0) - 97

    div.addEventListener("click", () => {
        console.log("Clicked")
        let selected = letterDiv.querySelector(".selected")
        let newSelected = div
        selected.classList.remove("selected")
        selected.style.fontWeight = "normal"

        newSelected.classList.add("selected")
        newSelected.style.fontWeight = "bold"

    })

}

const prev = document.createElement("button")
prev.id = "prev"
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

    selected.style.fontWeight = "normal"
    newSelected.style.fontWeight = "bold"

})

const next = document.createElement("button")
next.id = "next"
next.innerText = ">"
next.addEventListener("click", () => {
    let selected = letterDiv.querySelector(".selected")
    selected.classList.remove("selected")
    let newId = selected.id.codePointAt(0) + 1
    if (newId > 122) {
        newId -= 26
    }
    let newSelected = letterDiv.querySelector("#" + String.fromCodePoint(newId))
    newSelected.classList.add("selected")

    selected.style.fontWeight = "normal"
    newSelected.style.fontWeight = "bold"
})

const inc = document.createElement("button")
inc.id = "increase"
inc.innerText = "+"
inc.addEventListener("click", () => {
    let selected = letterDiv.querySelector(".selected")
    currentSize = Number(selected.dataset.size)
    if (currentSize < 26) currentSize += 2
    selected.style.fontSize = currentSize + "px"
    selected.dataset.size = currentSize
})

const dec = document.createElement("button")
dec.id = "decrease"
dec.innerText = "-"
dec.addEventListener("click", () => {
    let selected = letterDiv.querySelector(".selected")
    currentSize = Number(selected.dataset.size)
    if (currentSize > 10) currentSize -= 2
    selected.style.fontSize = currentSize + "px"
    selected.dataset.size = currentSize
})

buttonDiv.append(prev, next, inc, dec)
