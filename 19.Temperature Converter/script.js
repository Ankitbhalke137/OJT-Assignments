const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');

celsiusInput.addEventListener('input', function() {
    if (this.value === '') {
        fahrenheitInput.value = '';
        return;
    }
    const c = parseFloat(this.value);
    const f = (c * 9/5) + 32;
    fahrenheitInput.value = f.toFixed(2).replace(/\.00$/, '');
});

fahrenheitInput.addEventListener('input', function() {
    if (this.value === '') {
        celsiusInput.value = '';
        return;
    }
    const f = parseFloat(this.value);
    const c = (f - 32) * 5/9;
    celsiusInput.value = c.toFixed(2).replace(/\.00$/, '');
});
