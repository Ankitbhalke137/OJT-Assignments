const boxes = document.querySelectorAll('.box');
const startBtn = document.getElementById('startBtn');
const status = document.getElementById('status');
const scoreDisplay = document.getElementById('score');

let pattern = [];
let userPattern = [];
let level = 0;
let playing = false;

startBtn.addEventListener('click', startGame);

function startGame() {
    startBtn.disabled = true;
    pattern = [];
    userPattern = [];
    level = 0;
    scoreDisplay.textContent = level;
    nextSequence();
}

function nextSequence() {
    userPattern = [];
    level++;
    scoreDisplay.textContent = level - 1;
    status.textContent = `Watch the pattern (Level ${level})`;
    
    const randomBox = Math.floor(Math.random() * 9);
    pattern.push(randomBox);
    
    playPattern();
}

function playPattern() {
    let i = 0;
    playing = true;
    const interval = setInterval(() => {
        const boxIndex = pattern[i];
        const box = boxes[boxIndex];
        
        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 400);
        
        i++;
        if (i >= pattern.length) {
            clearInterval(interval);
            setTimeout(() => {
                playing = false;
                status.textContent = "Your turn!";
            }, 400);
        }
    }, 800);
}

boxes.forEach(box => {
    box.addEventListener('click', function() {
        if (playing || pattern.length === 0) return;
        
        const index = parseInt(this.getAttribute('data-index'));
        userPattern.push(index);
        
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 200);
        
        checkAnswer(userPattern.length - 1);
    });
});

function checkAnswer(currentLevel) {
    if (pattern[currentLevel] === userPattern[currentLevel]) {
        if (userPattern.length === pattern.length) {
            status.textContent = "Correct! Get ready for next level.";
            setTimeout(nextSequence, 1000);
        }
    } else {
        status.textContent = "Game Over! You clicked the wrong box.";
        startBtn.disabled = false;
        startBtn.textContent = "Play Again";
        playing = false;
        pattern = [];
    }
}
