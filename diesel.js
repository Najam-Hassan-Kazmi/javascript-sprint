function calculateFines(data) {
    const result = {
        totalFines: 0,
        cars: []
    }
    
    let totalFines = 0

    JSON.parse(data).forEach((car) => {
        
        if (car[3] < 2000) {
            result.cars.push({
                "reg": car[2],
                "year": car[3],
                "fuel": car[4],
                "fine": 20
            })
            totalFines += 20
        } else if (car[4] === "diesel" && car[3] < 2015) {
            result.cars.push({
                "reg": car[2],
                "year": car[3],
                "fuel": car[4],
                "fine": 10
            })
            totalFines += 10
        }
        
        
        // car.forEach((prop) => {
            
        // })
    })

    result.totalFines = totalFines

    return JSON.stringify(result)
    
}


const carData = '[["Toyota", "Camry", "ABC123", 2014, "diesel"], ["Ford", "Focus", "XYZ456", 1999, "petrol"]]'

console.log(calculateFines(carData))
