// sketchpad
let sketchPad = document.getElementById('sketch-pad')
// new grid btn
let newGrid = document.querySelector('.btn-newGrid')
// input type color
let colorPicker = document.getElementById('color')
// black color button
let blackColorBtn = document.getElementById('color-black')
//random colors
let randomColors = document.getElementById('rainbow')
// clear boxes button
let clearSeparateBoxes = document.getElementById('clear-boxes')
//clear all
let clearAll = document.getElementById('clear-all')

// 16 by 16 grid
for (let i = 1; i <= 256; i++) {
  let box = document.createElement('div')
  box.className = 'boxes'
  sketchPad.appendChild(box)
}

colorPicker.addEventListener('click', pickTheColor)
blackColorBtn.addEventListener('click', blackColor)
randomColors.addEventListener('click', pickRandomColors)
clearSeparateBoxes.addEventListener('click', rubber)

function pickTheColor() {
  document.body.addEventListener('mouseover', function (e) {
    if (e.target.className == 'boxes') {
      e.target.style.backgroundColor = colorPicker.value
    }
  })
}

//black color
function blackColor() {
  document.body.addEventListener('mouseover', function (e) {
    if (e.target.className == 'boxes') {
      e.target.style.backgroundColor = 'black'
    }
  })
}

// random color on mouseover
function pickRandomColors() {
  document.body.addEventListener('mouseover', function (e) {
    if (e.target.className == 'boxes') {
      e.target.style.backgroundColor = randomChoice()
    }
  })
}

// random color generator
function randomChoice() {
  let letters = '0123456789ABCDEF'
  let sign = '#'
  for (let i = 0; i < 6; i++) {
    sign += letters[Math.floor(Math.random() * 16)]
  }
  return sign
}

function rubber() {
  document.body.addEventListener('mouseover', function (e) {
    if (e.target.className == 'boxes') {
      e.target.style.backgroundColor = 'white'
    }
  })
}

//clear sketch pad
clearAll.addEventListener('click', function () {
  let allBoxes = document.querySelectorAll('.boxes')
  allBoxes.forEach(function (box) {
    box.style.backgroundColor = 'white'
  })
})

// add button
newGrid.addEventListener('click', changeTheGrid)
//make new grid
function changeTheGrid() {
  sketchPad.innerHTML = ''
  let userInput = prompt(
    'enter a number of squares per side that is less than 100',
    '0',
  )
  let sideBoxes = parseInt(userInput)
  sketchPad.style.gridTemplateColumns = `repeat(${sideBoxes}, 1fr)`
  sketchPad.style.gridTemplateRows = `repeat(${sideBoxes}, 1fr)`
  let grid = sideBoxes * sideBoxes

  for (let i = 1; i <= grid; i++) {
    let box = document.createElement('div')
    box.className = 'boxes'
    sketchPad.appendChild(box)
  }
}
