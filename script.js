let score1 = 0;
let score2 = 0;
let gameOver = false;

const addTop = document.getElementById('addTop');
const addBottom = document.getElementById('addBottom');
const subtractTopRight = document.getElementById('subtractTopRight');
const subtractBottomLeft = document.getElementById('subtractBottomLeft');
const score1Display = document.getElementById('score1-display');
const score2Display = document.getElementById('score2-display');
const winMessage = document.getElementById('winMessage');
const flashEffect = document.getElementById('flashEffect');

function updateScores() {
    score1Display.textContent = score1;
    score2Display.textContent = score2;

    if (score1 >= 100) declareWinner("White");
    if (score2 >= 100) declareWinner("Black");
}

function declareWinner(winner) {
    gameOver = true;
    winMessage.textContent = `${winner} Wins!`;
    winMessage.style.display = 'block';
    winMessage.style.animation = 'none';  // Reset animation
    void winMessage.offsetWidth; // Trigger reflow for restart
    winMessage.style.animation = 'win-glow 1s ease-out';  // Apply new animation

    if (winner === "White") {
        winMessage.classList.add("win-white");
    } else {
        winMessage.classList.add("win-black");
    }
}

addTop.addEventListener('click', () => {
    if (!gameOver) { score1 += 5; updateScores(); }
});
addBottom.addEventListener('click', () => {
    if (!gameOver) { score2 += 5; updateScores(); }
});

subtractTopRight.addEventListener('click', () => {
    if (!gameOver) { score1 = Math.max(0, score1 - 5); updateScores(); }
});
subtractBottomLeft.addEventListener('click', () => {
    if (!gameOver) { score2 = Math.max(0, score2 - 5); updateScores(); }
});

updateScores();
window.addEventListener('load', function() {
    setTimeout(() => {
        window.scrollTo(0, 1);
    }, 100);
});