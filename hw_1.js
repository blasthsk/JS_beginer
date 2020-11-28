let i = 0
while (i <= 100) {
    if ((i%2 && i%3 && i%5 && i%7 && i!==1)||(i===2||i==3||i==5||i===7)) {
        console.log(i);
    }
    i++   
}
