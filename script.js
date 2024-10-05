function getRandomHexColor() {
    const randomValue = Math.floor(Math.random() * 16777215);
    return "#" + randomValue.toString(16).padStart(6, '0');
 }

function hover() {
    this.style.backgroundColor = getRandomHexColor();
}

function reset() {
    const newSize = prompt("Enter how many squares should be on a side (max 100): ")
    squares.forEach(square => {
        square.remove();
    })
    for (i = 0; i < newSize; i++) {
        for (j = 0; j < newSize; j++) {
            const newSquare = document.createElement('div');
            newSquare.classList.add('square');
            container.appendChild(newSquare);
        }
    }

    const containerWidth = container.offsetWidth;
    const remainder = containerWidth - (newSize * 2);
    const length = Math.floor(remainder / newSize);

    squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.width = length + "px";
        square.style.height = length + "px";
        square.addEventListener("mouseover", hover);
    })

}

const container = document.querySelector(".container");

for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

let squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("mouseover", hover);
});

const button = document.querySelector("button");
button.addEventListener("click", reset);