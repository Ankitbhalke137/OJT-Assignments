const passwordInput = document.getElementById('password');
const strengthFill = document.getElementById('strengthFill');
const strengthText = document.getElementById('strengthText');
const lengthCriteria = document.getElementById('length');
const uppercaseCriteria = document.getElementById('uppercase');
const numberCriteria = document.getElementById('number');
const symbolCriteria = document.getElementById('symbol');

passwordInput.addEventListener('input', function () {
    const password = this.value;
    let score = 0;

    const hasLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    lengthCriteria.classList.toggle('valid', hasLength);
    uppercaseCriteria.classList.toggle('valid', hasUppercase);
    numberCriteria.classList.toggle('valid', hasNumber);
    symbolCriteria.classList.toggle('valid', hasSymbol);

    if (hasLength) score++;
    if (hasUppercase) score++;
    if (hasNumber) score++;
    if (hasSymbol) score++;

    const levels = ['', 'Weak', 'Fair', 'Strong', 'Very Strong'];
    const colors = ['', '#e94560', '#f39c12', '#4ecca3', '#00b894'];
    const widths = ['0%', '25%', '50%', '75%', '100%'];

    strengthFill.style.width = widths[score];
    strengthFill.style.background = colors[score];
    strengthText.textContent = password ? levels[score] : 'Enter a password to check strength';
    strengthText.style.color = colors[score] || '#fff';
});
