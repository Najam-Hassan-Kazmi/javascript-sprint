const sender = {
    name: "Tom",
    address: "123 Main St",
}

const deliveryPackage = {
    contents: "porridge",
    sender: Array.from(sender)
}

const trackingInfo = {
    sender: Array.from(sender),
    status: "in transit"
}