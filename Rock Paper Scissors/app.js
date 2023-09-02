const choices = ["Rock", "Paper", "Scissors"];

// The score
let playerScore = 0;
let computerScore = 0;
const gameHistory = [];

// Computer Random
function generateComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Add Choice to history
function addToHistory(userChoice, computerChoice, result) {
    if (gameHistory.length >= 5) {
        gameHistory.shift(); // Remove the oldest game result if there are already 5
    }
    gameHistory.push({ userChoice, computerChoice, result });
    updateHistoryDisplay();
}

// Update history
function updateHistoryDisplay() {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = '';
    for (const game of gameHistory) {
        const listItem = document.createElement("li");
        listItem.textContent = `You chose "${game.userChoice}", Computer chose "${game.computerChoice}", Result: "${game.result}"`;
        historyList.appendChild(listItem);
    }
}

// Determine the winner and update the score
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        setResult("It's a tie!");
        addToHistory(userChoice, computerChoice, "Tie");
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        setResult("You win!");
        playerScore++;
        addToHistory(userChoice, computerChoice, "Player Win");
    } else {
        setResult("Computer wins!");
        computerScore++;
        addToHistory(userChoice, computerChoice, "Computer Win");
    }

    // Update the scoreboard
    document.getElementById("player-score").textContent = `Player: ${playerScore}`;
    document.getElementById("computer-score").textContent = `Computer: ${computerScore}`;

    // Reset
    setTimeout(resetGame, 3000);
}

// Results
function setResult(message) {
    document.getElementById("winner").textContent = message;
}

// Reset the game
function resetGame() {
    document.getElementById("computer-choice").textContent = "";
    document.getElementById("winner").textContent = "";
}

// Player choices
function playerChoiceClick(choice) {
    const computerChoice = generateComputerChoice();
    document.getElementById("computer-choice").textContent = computerChoice;
    determineWinner(choice, computerChoice);
}

// Event Listeners
document.getElementById("rock").addEventListener("click", () => playerChoiceClick("Rock"));
document.getElementById("paper").addEventListener("click", () => playerChoiceClick("Paper"));
document.getElementById("scissors").addEventListener("click", () => playerChoiceClick("Scissors"));