const body = document.body

body.style.margin = "0px"

const div = document.createElement("div")
div.style.display = "flex"

const freeDiv = document.createElement("div")
freeDiv.classList.add("outside", "zone")
freeDiv.style.width = "50%"
freeDiv.style.height = window.innerHeight + "px"

const jailDiv = document.createElement("div")
jailDiv.classList.add("inside", "zone")
jailDiv.style.width = "50%"
jailDiv.style.height = window.innerHeight + "px"
let cY = 0, cX = 0
let color

document.documentElement.style.setProperty("--orange", "orange")
document.documentElement.style.setProperty("--white", "white")

document.addEventListener("keydown", (e) => {

    const ch = e.key

    if (ch >= "a" && ch <= "z") {
        const keyDiv = document.createElement("div")
        const previous = document.querySelector(".follow")
        if (previous) {
            previous.classList.remove("follow")
        }
        keyDiv.classList.add("character", "follow")
        keyDiv.innerText = e.key
        let color = document.documentElement.style.getPropertyValue("--white")
        keyDiv.style.backgroundColor = color
        keyDiv.style.position = "absolute"
        keyDiv.style.left = (cX) + "px"
        keyDiv.style.top = (cY) + "px"
        keyDiv.style.transform = "translate(-50%, -50%)"
        // keyDiv.style.alignItems = "center"

        div.append(keyDiv)
        keyDiv.style.fontSize = "50px"
        if (cX > window.innerWidth / 2) {
            color = document.documentElement.style.getPropertyValue("--orange")
            keyDiv.style.backgroundColor = color
            keyDiv.classList.add("trapped")

        } else if (cX <= window.innerWidth / 2 && following.classList.contains("trapped")) {
            keyDiv.classList.remove("follow")
        } else {
            color = document.documentElement.style.getPropertyValue("--white")
            keyDiv.style.backgroundColor = color
        }
    } else if (ch == "Escape") {
        const elements = document.querySelectorAll(".character")
        elements.forEach(e => {
            e.remove()
        })
    }
})

document.addEventListener("pointermove", (e) => {
    cY = e.clientY, cX = e.clientX
    const following = document.querySelector(".follow")
    if (following) {
        following.style.left = cX + "px"
        following.style.top = cY + "px"

        if (cX > window.innerWidth / 2) {
            color = document.documentElement.style.getPropertyValue("--orange")
            following.style.backgroundColor = color
            following.classList.add("trapped")

        } else if (cX <= window.innerWidth / 2 && following.classList.contains("trapped")) {
            following.style.left = window.innerWidth / 2 + "px"
            following.classList.remove("follow")
        } else {
            color = document.documentElement.style.getPropertyValue("--white")
            following.style.backgroundColor = color
        }
    }
})

div.append(freeDiv, jailDiv)
body.append(div)




