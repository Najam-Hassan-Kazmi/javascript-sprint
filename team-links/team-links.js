const body = document.body
const ul = document.createElement("ul")
ul.id = "team-list-nav"
ul.classList.add("team-links")

function createLinks(teams) {

    teams.forEach((team) => {
        const li = document.createElement("li")
        li.style.backgroundColor = team.primary

        const a = document.createElement("a")
        a.href = team.url
        a.style.color = team.secondary
        a.innerText = team.name

        const span = document.createElement("span")
        span.innerText = "[copy]"
        span.addEventListener("click", () => navigator.clipboard.writeText(team.url))

        li.append(a, span)
        ul.append(li)
    })
}

body.append(ul)



const teams = [
    {
        "name": "Brazil",
        "url": "https://en.wikipedia.org/wiki/Brazil_national_football_team",
        "primary": "#ffdf00",
        "secondary": "#009c3b"
    },
    {
        "name": "Netherlands",
        "url": "https://en.wikipedia.org/wiki/Netherlands_national_football_team",
        "primary": "#f36c21",
        "secondary": "#ffffff"
    }
]

createLinks(teams)