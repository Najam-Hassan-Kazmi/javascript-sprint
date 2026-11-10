function classifyDate(date) {
    // date = new Date(date)
    // const current = new Date()
    const current = Date.now()
    const year = 31557600000

    if (date <= current) {
        if (date <= current -  year) {
            return "ancient"
        } else {
            return "past"
        }
    }

    if (date > current) {
        if (date >= current + year) {
            return "distant future"
        } else {
            return "future"
        }
    }
    
    // if (date.getFullYear() < current.getFullYear()) {
    //     if (date.getFullYear() === current.getFullYear()-1) {
    //         if (date.getMonth() > date.getMonth) {

    //         }
    //     }
    // }

    // if (date.getFullYear() === current.getFullYear()) {

    // }

    // if (date.getFullYear() > current.getFullYear()) {

    // }

    return "NOOOTHING"
}

// console.log(classifyDate(5822222222222-31557600000))