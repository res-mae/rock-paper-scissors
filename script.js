let humanScore = 0;
let computerScore = 0;
let startGame = null;

startGame = prompt("Open the browser console, refresh the page, and press Enter to start.");

if (startGame != null) {
    playGame();
}

console.log("Refresh the page to play again.");

function getComputerChoice() {
    const randomChoice = ["rock", "paper", "scissors"]
    return randomChoice[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    const sign = prompt("rock, paper, or scissors?");
    return sign.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Draw! Both players chose " + humanChoice);
        console.log("Retry Round");

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

    }

    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (computerChoice == "scissors") {
            console.log("You lose! Scissors beat Paper");
            computerScore++;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if (computerChoice == "paper") {
            console.log("You win! Scissors beat Paper");
            humanScore++;
        }
    }
}

function playGame() {
    let retryRound = false;

    for (let i = 1; i <= 5; i++) {
        console.log("\nRound " + i);

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);

        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);

    }

    if (humanScore > computerScore) {
        console.log("\nYou win!");
    } else if (computerScore > humanScore) {
        console.log("\nYou lose!");
    } else {
        console.log("\nIt's a tie");
    }

    return console.log("Final score: " + humanScore + "-" + computerScore);
    
}