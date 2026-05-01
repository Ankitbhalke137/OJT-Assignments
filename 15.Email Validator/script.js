const emailInput = document.getElementById('emailInput');
const validateBtn = document.getElementById('validateBtn');
const resultMsg = document.getElementById('resultMsg');

validateBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === '') {
        resultMsg.textContent = 'Please enter an email address.';
        resultMsg.className = 'result invalid';
        return;
    }
    
    if (emailRegex.test(email)) {
        resultMsg.textContent = 'Valid Email Address ✓';
        resultMsg.className = 'result valid';
    } else {
        resultMsg.textContent = 'Invalid Email Address ✗';
        resultMsg.className = 'result invalid';
    }
});
