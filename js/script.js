// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Bonus:
// Aggiungere la possibilità di scegliere un livello di difficoltà in base al quale viene generata una griglia di uno dei seguenti range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

document.getElementById("play").addEventListener("click", startGame);

function startGame() {

    // Make "h2" disappear when the function starts
    const mainTitle = document.getElementById("title-d-none")
    mainTitle.classList.add("d-none")

    // Make the grid appear when the function starts
    const genGridContainer = document.getElementById("grid");
    genGridContainer.classList.add("grid-container");

    // 1 - Choose to generate numbers from 1 to 100, then pass the function "genGridNumb" to pass the array
    const gridSize = 100;
    const gridArray = genGridNumb(gridSize);


    // 2 - Each number of the array creates a grid cell and if the user click on a cell it gets painted
    const gridContainer = document.getElementById("grid");
    gridContainer.innerHTML = "";

    for (let i = 0; i < gridArray.length; i++) {
        const thisNumber = gridArray[i];

        const domElement = genGridCell(thisNumber)

        domElement.addEventListener("click", function() {
            this.classList.add("active");
        });

        gridContainer.append(domElement);
    }
}



// FUNCTIONS
/**
 * Description -> Creates an array necessary to create the grid used to play the game
 * @param {integer} gridNumbCount -> Used to pass the value choosen in the function "startGame" to the max of the array described in this function
 * @returns {array} -> Returns an array from 1 to a number choosen in the function "startGame"
 */

function genGridNumb(gridNumbCount) {
    const numbers = [];
    for (let i = 0; i < gridNumbCount; i++) {
        numbers[i] = i + 1;
    }
    console.log(numbers)
    return numbers;
}

/**
 * Description -> Creates the cells contained inside the grid
 * @param {Integer} number -> Used to pass the numbers in the array used by the function "startGame" to the span elements inside the grid
 * @returns {html-element} -> Returns the code to create span elements to generate grid cells in html
 */

function genGridCell(number) {
    const newElement = document.createElement("div");

    newElement.innerHTML = `<span>${number}</span>`

    newElement.classList.add("grid-item");

    return newElement;
}
