function getComputerChoice() {
	let choices = ["rock", "paper", "scissors"];
	return choices[Math.floor(Math.random() * 3)];
}

function getPlayerSelection() {
	let playerChoice = prompt("Input your choice");
	return playerChoice.toLowerCase();
}

let winner = "";
function playRound(playerSelection, computerSelection) {
	switch (true) {
		case playerSelection === computerSelection:
			console.log("It's a tie!");
			break;
		case playerSelection === "rock" && computerSelection === "scissors":
			console.log("You win! Rock beats scissors");
			winner = "player";
			break;
		case playerSelection === "rock" && computerSelection === "paper":
			console.log("You lose! Paper beats rock");
			winner = "pc";
			break;
		case playerSelection === "paper" && computerSelection === "scissors":
			console.log("You lose! Scissors beats paper");
			winner = "pc";
			break;
		case playerSelection === "paper" && computerSelection === "rock":
			console.log("You win! Paper beats rock");
			winner = "player";
			break;
		case playerSelection === "scissors" && computerSelection === "rock":
			console.log("You lose! Rock beats scissors");
			winner = "pc";
			break;
		case playerSelection === "scissors" && computerSelection === "paper":
			console.log("You win! Scissors beats paper");
			winner = "player";
			break;

		default:
			console.log("There's been an error");
	}
	return winner;
}

function game() {
	let playerScore = 0;
	let pcScore = 0;
	for (let i = 0; i < 3; i++) {
		playRound(getPlayerSelection(), getComputerChoice());
		if (winner === "player") {
			playerScore += 1;
		} else if (winner == "pc") {
			pcScore += 1;
		}
	}

	console.log(`Player Score: ${playerScore}, PC Score: ${pcScore}`);
	if (playerScore > pcScore) {
		console.log("You win the game!");
	} else if (playerScore < pcScore) {
		console.log("You lose the game!");
	} else {
		console.log("It's a tie!");
	}
}
game();
