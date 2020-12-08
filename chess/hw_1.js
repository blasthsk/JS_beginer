let main = document.querySelector(".main")

let playfield = [
    [1,"a","b","c","d","e","f","g","h"],
    [2,"a","b","c","d","e","f","g","h"],
    [3,"a","b","c","d","e","f","g","h"],
    [4,"a","b","c","d","e","f","g","h"],
    [5,"a","b","c","d","e","f","g","h"],
    [6,"a","b","c","d","e","f","g","h"],
    [7,"a","b","c","d","e","f","g","h"],
    [8,"a","b","c","d","e","f","g","h"]
]
function cellCreation(cell,text) {
    let s = document.querySelector(".main")
    let el = document.createElement("div")
    el.setAttribute("class",cell)
    let eltext = document.createElement("div")
    eltext.setAttribute("class","text")
    eltext.textContent = text
    el.append(eltext)
    s.append(el)
}

function draw() {
    let color = 1;
    for (let y = 0; y < playfield.length; y++) {
        
        for (let x = 1; x < playfield[y].length; x++) {
            if (color) {
                cellCreation("Browncell",(playfield[y][0] + playfield[y][x]).toString())
                if ((x!==playfield[y].length-1)) {
                    color = 0;
                }
                
            }else{
                cellCreation("cell",(playfield[y][0] + playfield[0][x]).toString())
                if ((x!==playfield[y].length-1)) {
                    color = 1;
                }
                
            }
            
        }
    }
       
}
draw();