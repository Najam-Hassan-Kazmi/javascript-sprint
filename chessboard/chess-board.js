
function initializeChessboard() {


    const body = document.body
    let previous

    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            const div = document.createElement("div")
            div.setAttribute("class", "square")
            div.setAttribute("id", "square-" + i + "-" + j)
            if ((i + j) % 2 == 0) {
                div.dataset.color = "white"
                div.dataset.original = "white"
            } else {
                div.dataset.color = "black"
                div.dataset.original = "black"
            }

            div.addEventListener("click", (e) => {
                if (previous) {
                    previous.dataset.color = previous.dataset.original
                }
                previous = div
                div.dataset.color = "red"
            })


            body.append(div)
        }

        const lineBreaker = document.createElement("br")
        body.append(lineBreaker)

    }

}

initializeChessboard()