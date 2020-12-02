let Busket = {
    goods : [],

    countBusketPrice(){
        let sum = 0
        for (let i = 0; i < this.goods.length; i++) {
           sum = sum + this.goods[i].price
           
        }
        return sum
    },
    takeInside(item){
        this.goods.push(item)
    },
    getRidOf(item){
        this.goods.splice(this.goods.indexOf(item),1)
    }
}

f = ["s","k"]
f
function newItem(name_of_itself,price_of_itself) {
    name_of_itself = {
        name : name_of_itself,
        price : price_of_itself,
        
    }
    return name_of_itself
}

let drunkDoll = newItem("drunkDoll",3)
let green_eyed_taxi = newItem("green_eyed_taxi",10000)
console.log(green_eyed_taxi)

Busket.takeInside(green_eyed_taxi)
Busket.takeInside(drunkDoll)
console.log(Busket)
console.log(Busket.goods)
console.log(Busket.countBusketPrice())
console.log(Busket.getRidOf(green_eyed_taxi))
console.log(Busket.goods)
