// Variables
let score = 0;
let timeLeft = 30;
let timerId;
let mouseIntervalId;

// Elements
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const mouseElement = document.getElementById('mouse');
const gameOverElement = document.querySelector('.game-over');

// Start game
function startGame() {
	// Set initial values
	score = 0;
	timeLeft = 30;
	scoreElement.innerText = score;
	timerElement.innerText = timeLeft;

	// Show mouse
	showMouse();

	// Start timer
	timerId = setInterval(updateTimer, 1000);
}

// Show mouse
function showMouse() {
	mouseElement.style.display = 'block';

	// Random position
	const x = Math.floor(Math.random() * (500 - 50) + 50);
	const y = Math.floor(Math.random() * (300 - 50) + 50);
	mouseElement.style.top = `${y}px`;
	mouseElement.style.left = `${x}px`;

	// Click event
	mouseElement.onclick = function() {
		score++;
		scoreElement.innerText = score;
		mouseElement.style.display = 'none';
		showMouse();
	};
}

// Update timer
function updateTimer() {
	timeLeft--;
	timerElement.innerText = timeLeft;

	// Game over
	if (timeLeft == 0) {
		clearInterval(timerId);
		clearInterval(mouseIntervalId);
		mouseElement.style.display = 'none';
		gameOverElement.style.display = 'block';
		gameOverElement.style.marginTop = "100px";
		gameOverElement.innerText = `Game Over! Your score is ${score}. \n Refresh the page to play again!!!`;
	}
}

// Start game button event
let startButton = document.createElement('button');
startButton.style.position = "absolute";
startButton.style.fontSize = "30px";
startButton.style.fontFamily = "Georgia";
startButton.style.left = "50%";
startButton.style.fontWeight = "bold";
startButton.style.marginTop = "50px"
startButton.style.transform = "translateX(-50%)";
startButton.innerText = 'Start Game';
startButton.onclick = function() {
	startGame();
};
document.body.appendChild(startButton);