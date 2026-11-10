function extractContent(content, start, end) {
    start = content.indexOf(start)
    end = content.lastIndexOf(end)
    
    return content.slice(start, end + 1)
}

console.log(extractContent("tRp0tXTv", "t", "t"))