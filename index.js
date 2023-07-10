let grid;
let squaresPerSide;
let squareSize
const colorMode = document.querySelector('#colormode');


function generateGrid() {
    grid = document.querySelector('.grid');
    squaresPerSide = prompt("Enter the number of squares per side (maximum 100):");
    grid.innerHTML = ""; // Clear grid

    if (squaresPerSide <= 100) {
        squareSize = 450 / squaresPerSide;

        grid.style.width = "450px";
        grid.style.height = "450px";

        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.style.width = `${squareSize}px`;
            gridSquare.style.height = `${squareSize}px`;

            gridSquare.addEventListener('mouseenter', function() {
                if (colorMode.checked) {
                    gridSquare.style.backgroundColor = getRandomColor();
                } else {
                    gridSquare.style.backgroundColor = getBlackColor();
                }
                
              });
            grid.appendChild(gridSquare);
        }
    } else {
        alert("Please enter a valid value less than 101");
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getBlackColor() {
    let color = 'black';
    return color;
  }

  function clearGrid() {
    grid.innerHTML = ""; // Clear grid
    grid.style.width = "450px";
    grid.style.height = "450px";

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.width = `${squareSize}px`;
        gridSquare.style.height = `${squareSize}px`;

        gridSquare.addEventListener('mouseenter', function() {
            if (colorMode.checked) {
              gridSquare.style.backgroundColor = getRandomColor();
          } else {
              gridSquare.style.backgroundColor = getBlackColor();
          }
            });
        grid.appendChild(gridSquare);
    }
  }