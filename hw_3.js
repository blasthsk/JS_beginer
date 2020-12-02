let CreditCard = {
    number : "0000000000000000",
    paySystem :"Visa",
    accountNumber : "000000000000000000000000",
    deactivationDate : [9,2023],
    isactive(){
        var now = new Date()
        month = (now.getMonth())
        year = (now.getFullYear())
        if ((month > this.deactivationDate[0]) && (year >= this.deactivationDate[1])) {
            return false

        }else{
            return true
        }
    },
    User : "MAKSIM IVANOV".split(" "),
    securityCode : "039",
    makePayment(){
        let getPackage = [this.User[0],this.User[1],this.number,this.deactivationDate,this.securityCode,this.isactive];
        "sendData()"

    }

}


console.log(CreditCard.isactive())
console.log(CreditCard.User)

// ну например

