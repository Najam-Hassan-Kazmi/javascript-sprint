const body = document.body

const contentDiv = document.createElement("div")
contentDiv.id = "content"
const p = document.createElement()
p.innerText = "code"

const buttonsDiv = document.createElement("div")
buttonsDiv.id = "controls"

body.append(contentDiv, buttonsDiv)


const bButton = document.createElement("button")
bButton.innerText = "B"
bButton.id = "bold"
bButton.addEventListener("click" => {

})

const iButton = document.createElement("button")
iButton.innerText = "I"
iButton.id = "italic"
iButton.addEventListener("click" => {

})

const uButton = document.createElement("button")
uButton.innerText = "U"
uButton.id = "underline"
uButton.addEventListener("click" => {

})

const hButton = document.createElement("button")
hButton.innerText = "H"
hButton.id = "highlight"
hButton.addEventListener("click" => {

})

buttonsDiv.append(bButton, iButton, uButton, hButton)
