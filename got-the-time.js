function printPrettyDate(x) {

    x = new Date(x)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let day = x.getDay()
    let month = x.getMonth()
    let date = x.getDate()
    let year = x.getFullYear()
    let meridiem = "AM"
    let hours = x.getHours()
    if (hours > 12) {
        meridiem = "PM"
        hours = hours - 12
    }
    let minutes = x.getMinutes()
    let seconds = x.getSeconds()

    console.log("Today is " + day + ", " + month + " " + date + ", " + year + ", and the time is " + hours + ":" + minutes + ":" + seconds + " " + meridiem)
}

printPrettyDate(Date.now())
