let main = document.getElementById("main")

let ShopingCart = {
    goods : [],

    countBusketPrice(){
        let sum = 0
        for (let i = 0; i < this.goods.length; i++) {
           sum = sum + this.goods[i][1]
           
        }
        if (this.goods.length>0) {
            main.innerHTML = "In your cart " + this.goods.length + " items" + " costing " + sum + "euro." 
        }else{
            main.innerHTML = "Cart is empty yet :("
        }

        
    },
    takeInside(name,price){
        this.goods.push([name,price])
        main.innerHTML = "In your cart " + this.goods.length + " items"
    },
    clear(){
        this.goods = []
        main.innerHTML = "Cart is empty yet :("
    }
}



ShopingCart.countBusketPrice()
ShopingCart.takeInside("t-shirt",3000)
ShopingCart.takeInside("Red Trousers",4000)
ShopingCart.takeInside("Regeneration Ring",5000)
ShopingCart.countBusketPrice()
