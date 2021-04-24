let parentDiv = document.getElementById("parentDiv")

let selectedImageParagraph = document.getElementById("selectedImageParagraph")
let selectedRotationParagraph = document.getElementById("selectedRotationParagraph")


let image
let rotation

createBlankQuilt()

function setToPattern() {
  image = `url("pattern.jpeg")`
  selectedImageParagraph.innerHTML = "Selected image: pattern"
}

function setToBoat() {
  image = `url("boat.jpeg")`
  selectedImageParagraph.innerHTML = "Selected image: boat"

}

function setToDog() {
  image = `url("dog.jpeg")`
  selectedImageParagraph.innerHTML = "Selected image: dog"

}

function rotate90() {
  rotation = "rotate(90deg)"
  selectedRotationParagraph.innerHTML = "Selected rotation: 90 degrees"
}

function rotate180() {
  rotation = "rotate(180deg)"
  selectedRotationParagraph.innerHTML = "Selected rotation: 180 degrees"
}

function rotate270() {
  rotation = "rotate(270deg)"
  selectedRotationParagraph.innerHTML = "Selected rotation: 270 degrees"
}

function updateSquare() {

  if (this.style.backgroundImage != "")  {
    this.style.transform = rotation
  }
  
  this.style.backgroundImage = image

  image = undefined
  rotation = undefined
  selectedImageParagraph.innerHTML = "Selected image: unselected"
  selectedRotationParagraph.innerHTML = "Selected rotation: unselected"
}

function createBlankQuilt() {
  parentDiv.innerHTML = ""
  
  for (let i = 0; i < 3; i++) {
    let childDiv = document.createElement("div")
    parentDiv.appendChild(childDiv)
  
    for (let j = 0; j < 3; j++) {
      let square = document.createElement("div")
      childDiv.appendChild(square)
      square.addEventListener("click", updateSquare)
      square.id = "square"    
    }
  }
}