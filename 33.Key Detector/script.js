const keyDisplay = document.getElementById('keyDisplay');
const keyCodeDisplay = document.getElementById('keyCodeDisplay');

document.addEventListener('keydown', function(event) {
    event.preventDefault(); // Prevent default browser actions for some keys like Space or Tab
    
    let key = event.key;
    
    if (key === ' ') {
        key = 'Space';
    }
    
    keyDisplay.textContent = key;
    keyCodeDisplay.textContent = event.keyCode || event.which;
    
    // Add a little pop animation
    keyDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        keyDisplay.style.transform = 'scale(1)';
    }, 100);
});
