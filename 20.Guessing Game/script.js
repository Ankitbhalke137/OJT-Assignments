let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const resetBtn = document.getElementById('resetBtn');

function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100!";
        message.style.color = 'red';
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (userGuess === randomNumber) {
        message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
        message.style.color = 'green';
        endGame();
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = '#e17055';
    } else {
        message.textContent = "Too high! Try again.";
        message.style.color = '#e17055';
    }
    
    guessInput.value = '';
    guessInput.focus();
}

function endGame() {
    guessInput.disabled = true;
    guessBtn.disabled = true;
    resetBtn.style.display = 'inline-block';
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsDisplay.textContent = attempts;
    message.textContent = '';
    guessInput.disabled = false;
    guessBtn.disabled = false;
    guessInput.value = '';
    resetBtn.style.display = 'none';
    guessInput.focus();
}

guessBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', resetGame);
guessInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') checkGuess();
});
