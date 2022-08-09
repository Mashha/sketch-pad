let sketchPad = document.getElementById("sketch-pad")

for(let i = 1; i <= 256; i++) {
    let box = document.createElement("div");
    box.style.border = "1px solid blue";
    sketchPad.appendChild(box);
    
}