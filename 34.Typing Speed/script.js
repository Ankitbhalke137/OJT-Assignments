const quoteElement = document.getElementById('quote');
const typingArea = document.getElementById('typingArea');
const timeDisplay = document.getElementById('time');
const wpmDisplay = document.getElementById('wpm');
const startBtn = document.getElementById('startBtn');

const sampleText = "The quick brown fox jumps over the lazy dog.";
quoteElement.textContent = sampleText;

let startTime;
let timerInterval;
let isPlaying = false;

startBtn.addEventListener('click', function() {
    if (isPlaying) {
        resetTest();
    } else {
        startTest();
    }
});

function startTest() {
    isPlaying = true;
    startBtn.textContent = 'Reset Test';
    startBtn.style.background = '#e74c3c';
    
    typingArea.disabled = false;
    typingArea.value = '';
    typingArea.focus();
    
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTime, 1000);
}

function resetTest() {
    isPlaying = false;
    clearInterval(timerInterval);
    startBtn.textContent = 'Start Test';
    startBtn.style.background = '#3498db';
    
    typingArea.disabled = true;
    typingArea.value = '';
    timeDisplay.textContent = '0';
    wpmDisplay.textContent = '0';
}

function updateTime() {
    const currentTime = new Date().getTime();
    const timeElapsed = Math.floor((currentTime - startTime) / 1000);
    timeDisplay.textContent = timeElapsed;
}

typingArea.addEventListener('input', function() {
    if (!isPlaying) return;
    
    const typedText = typingArea.value;
    
    if (typedText === sampleText) {
        clearInterval(timerInterval);
        isPlaying = false;
        typingArea.disabled = true;
        
        const timeTaken = parseInt(timeDisplay.textContent);
        const words = sampleText.split(' ').length;
        const wpm = Math.round((words / timeTaken) * 60);
        
        wpmDisplay.textContent = isNaN(wpm) || !isFinite(wpm) ? 0 : wpm;
        
        startBtn.textContent = 'Try Again';
        startBtn.style.background = '#2ecc71';
    }
});
