let min = 1
let max = 100
let randomNumber = generateRandomNumber(min, max);
const input = document.getElementById('input-field');
const button = document.getElementById('test-button');
const result = document.getElementById('result-text');
const resetButton = document.getElementById('reset');
let numberOfGuess = 0;

// Generate Random Number
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Main Function
function guess() {
    const userGuess = parseInt(input.value)

    if (isNaN(userGuess) || userGuess <= min || userGuess >= max) {
        result.textContent = "Please Enter a Number between 1 and 100"
    } else {
        numberOfGuess++
    }

    if (userGuess > randomNumber) {
        result.textContent = "Number is Smaller, Try Again!"
    } else if (userGuess < randomNumber) {
        result.textContent = "Number is Bigger, Try Again!"
    } else {
        result.textContent = `Yes, That's CORRECT! You Guessed it in ${numberOfGuess} ${numberOfGuess === 1 ? "guess" : "guesses" }`

        button.disabled = true;
        resetButton.disabled = false;
    }
}

// Reset Game
function resetGame() {
    randomNumber = generateRandomNumber(min, max);
    input.value = "";
    result.textContent = "";
    numberOfGuesses = 0;
    button.disabled = false;
    resetButton.disabled = true;
}

// Buttons
button.addEventListener('click', guess)
resetButton.addEventListener("click", resetGame);
resetGame()