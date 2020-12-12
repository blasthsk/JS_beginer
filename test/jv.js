let ShopInf = document.getElementById("cart")

let  = {

}
let MyShopping = {
    products : [],
    takeNew(newPr){
        this.products.push(newPr)
        ShopInf.textContent = "В Корзине " + this.products.length + " товаров"
    },
    showAll(){
        let x = ShopInf.textContent 
        for (let i = 0; i < this.products.length; i++) {
            x = x + this.products[i]
            
        }
    },
    clearStorage(){
        this.products = []
        ShopInf.textContent = "В Корзине " + this.products.length + " товаров"
    }
}

document.onclick = function (event) {
    let target = event.target
    if (target.className === "Like") {
        let i =(target.parentElement.querySelector(".likecount"))
        i.textContent = parseInt(i.textContent) + 1
    }else{
        if (target.className === "Add in Cart") {
            let productName = target.parentElement.parentElement.querySelector("h2").textContent
            let price = parseInt(target.parentElement.parentElement.querySelector(".information").querySelector("h3").textContent.split(" ")[0])
            MyShopping.products.push({name : productName,price : price})
            console.log("done")
        }else{
            if (target.className === "ShowMe") {
                let ScreenTool = target.parentElement.parentElement.querySelector(".information")
                ScreenTool.textContent = ""
                inner = ""
                for (let i = 0; i < MyShopping.products.length; i++) {
                    let p = document.createElement("p")
                    console.log(p)
                    let tem = ScreenTool.appendChild(p)
                    console.log(MyShopping.products[i])
                    tem.textContent= (MyShopping.products[i].name + " - " + MyShopping.products[i].price)
                    
                    
                }
            }else {
                if(target.className === "clearAll"){
                console.log("sdfnbvosn")
                MyShopping.clearStorage()
                let ScreenTool = target.parentElement.parentElement.querySelector(".information")
                while(ScreenTool.firstChild){ScreenTool.removeChild.firstChild;}
                console.log("sdfnbvosn")
            }
        }
        }
        
    }
}

//console.log(likeButt.parentElement.parentElement.querySelector("h2").textContent)





