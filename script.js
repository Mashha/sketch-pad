let sketchPad = document.getElementById("sketch-pad")

// 16 by 16 grid
for(let i = 1; i <= 256; i++) {
    let box = document.createElement("div");
   box.style.border = "1px solid blue";
    sketchPad.appendChild(box);
    
    
    box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "orange"
})
}



