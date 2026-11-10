function classifyDate(date) {
    date = new Date(date)
    const current = new Date() 
    if (date.getFullYear() <= current.getFullYear()) {
        if (date.getFullYear() < current.getFullYear()-1) {
            return "ancient"
        }
        return "past"
    }

    if (date.getFullYear() > current.getFullYear()+1) {
        return "distant future"
    }

    return "future"
}