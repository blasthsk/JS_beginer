numberFeatures = {
    num : 0 ,
    setNewNum(n){
        this.num = n
    },
    printFullnum(){
        console.log(this.num)
    },
    units : function(){
        return this.num % 10
    },
    tens : function(){
        return ((this.num - this.units()) % 100)/10
    },
    hundrets : function(){
        return (this.num - this.num % 100) / 100
    }

}
numberFeatures.printFullnum()
numberFeatures.setNewNum(126)
numberFeatures.printFullnum()
console.log(numberFeatures.units())
console.log(numberFeatures.tens())
console.log(numberFeatures.hundrets())
numberFeatures.setNewNum(998)
numberFeatures.printFullnum()
console.log(numberFeatures.hundrets())
