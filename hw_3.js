
function takeInBusket(actBusk,item,cost) {
    actBusk.push([item,cost])
    
}


let busket = []

takeInBusket(busket,"Goat Milk",3000)
takeInBusket(busket,"Red Bread",30.99)
takeInBusket(busket,"Brocken Hammer",480)

console.log(busket)

function countBusketPrice(busk) {
    let sum = 0
    for (let i = 0; i < busk.length; i++) {
        sum = sum + busk[i][1]
        
    }
    return sum
}
console.log(countBusketPrice(busket))