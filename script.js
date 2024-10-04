function getRandomHexColor() {
    const randomValue = Math.floor(Math.random() * 16777215);
    return "#" + randomValue.toString(16).padStart(6, '0');
 }

function hover() {
    this.style.backgroundColor = getRandomHexColor();
}

const container = document.querySelector(".container");

for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("mouseover", hover);
});