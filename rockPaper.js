function getComputerChoice() {
	let choices = ["rock", "paper", "scissors"];
	return choices[Math.floor(Math.random() * 3)];
}

/* function getPlayerSelection() {
	return playerChoice;
} */

let winner = "";
let result = "";
let playerScore = 0;
let pcScore = 0;
let score = document.querySelector("div.score");
let contentS = document.createElement("p");
contentS.setAttribute("id", "score");

function gameShouldFinish(playerScore, pcScore) {
	if (playerScore > 2) {
		contentS.textContent = "You win the game!";
		document.getElementById("reset").removeAttribute("hidden");
		document.querySelector("button.rock").setAttribute("disabled", "");
		document.querySelector("button.paper").setAttribute("disabled", "");
		document.querySelector("button.scissors").setAttribute("disabled", "");
	} else if (pcScore > 2) {
		contentS.textContent = "You lose the game!";
		document.getElementById("reset").removeAttribute("hidden");
		document.querySelector("button.rock").setAttribute("disabled", "");
		document.querySelector("button.paper").setAttribute("disabled", "");
		document.querySelector("button.scissors").setAttribute("disabled", "");
	} else if (playerScore === 2 && pcScore === 2 && playerScore === pcScore) {
		contentS.textContent = "It's a tie!";
		document.getElementById("reset").removeAttribute("hidden");
		document.querySelector("button.rock").setAttribute("disabled", "");
		document.querySelector("button.paper").setAttribute("disabled", "");
		document.querySelector("button.scissors").setAttribute("disabled", "");
	}
}

function playRound(playerSelection, computerSelection) {
	switch (true) {
		case playerSelection === computerSelection:
			result = "It's a tie!";
			break;
		case playerSelection === "rock" && computerSelection === "scissors":
			result = "You win! Rock beats scissors";
			winner = "player";
			break;
		case playerSelection === "rock" && computerSelection === "paper":
			result = "You lose! Paper beats rock";
			winner = "pc";
			break;
		case playerSelection === "paper" && computerSelection === "scissors":
			result = "You lose! Scissors beats paper";
			winner = "pc";
			break;
		case playerSelection === "paper" && computerSelection === "rock":
			result = "You win! Paper beats rock";
			winner = "player";
			break;
		case playerSelection === "scissors" && computerSelection === "rock":
			result = "You lose! Rock beats scissors";
			winner = "pc";
			break;
		case playerSelection === "scissors" && computerSelection === "paper":
			result = "You win! Scissors beats paper";
			winner = "player";
			break;

		default:
			result = "There's been an error";
	}

	if (winner === "player") {
		playerScore += 1;
	} else if (winner === "pc") {
		pcScore += 1;
	}

	document.getElementById("result").innerHTML = `${result}`;

	document.getElementById(
		"playerScore"
	).innerHTML = `Player score: ${playerScore}`;
	document.getElementById("pcScore").innerHTML = `PC score: ${pcScore}`;

	gameShouldFinish(playerScore, pcScore);

	score.appendChild(contentS);

	winner = "";
}

let rock = document.querySelector("button.rock");
let paper = document.querySelector("button.paper");
let scissors = document.querySelector("button.scissors");

rock.addEventListener("click", () => {
	playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
	playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
	playRound("scissors", getComputerChoice());
});

function reset() {
	document.getElementById("reset").setAttribute("hidden", "");
	winner = "";
	result = "";
	playerScore = 0;
	pcScore = 0;
	document.getElementById("score").innerHTML = "";
	document.getElementById("result").innerHTML = "";
	document.getElementById(
		"playerScore"
	).innerHTML = `Player score: ${playerScore}`;
	document.getElementById("pcScore").innerHTML = `PC score: ${pcScore}`;
	document.querySelector("button.rock").removeAttribute("disabled");
	document.querySelector("button.paper").removeAttribute("disabled");
	document.querySelector("button.scissors").removeAttribute("disabled");
}

document.getElementById("reset").addEventListener("click", () => {
	reset();
});
