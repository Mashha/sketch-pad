// sketchpad
let sketchPad = document.getElementById("sketch-pad");
// new grid btn
let newGrid = document.querySelector(".btn-newGrid");

// 16 by 16 grid
for(let i = 1; i <= 256; i++) {
    let box = document.createElement("div");
    box.className = "boxes"
    box.style.border = "1px solid blue";
    sketchPad.appendChild(box)
    
}
// add color on mouseover
document.body.addEventListener("mouseover", function(e) {
    if(e.target.className == "boxes") {
        e.target.style.backgroundColor = "orange"
    }
})
// add button
newGrid.addEventListener("click", changeTheGrid)
//make new grid 
function changeTheGrid() {
    sketchPad.innerHTML = "";
    let userInput = prompt("enter a number of squares per side that is less than 100", "0")
    let sideBoxes = parseInt(userInput)
    sketchPad.style.gridTemplateColumns = `repeat(${sideBoxes}, 1fr)`
    sketchPad.style.gridTemplateRows = `repeat(${sideBoxes}, 1fr)`
    let grid = sideBoxes * sideBoxes;

    for(let i = 1; i <= grid; i++) {
        let box = document.createElement("div");
        box.className = "boxes"
        box.style.border = "1px solid blue";
        sketchPad.appendChild(box)   
    }
}