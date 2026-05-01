function calculateAge() {
    const dateInput = document.getElementById('dateInput').value;
    const result = document.getElementById('result');
    
    if (!dateInput) {
        result.textContent = "Please select a date.";
        result.style.color = 'red';
        return;
    }

    const dob = new Date(dateInput);
    const today = new Date();
    
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    
    if (age < 0) {
        result.textContent = "Date of birth cannot be in the future!";
        result.style.color = 'red';
    } else {
        result.textContent = `You are ${age} years old.`;
        result.style.color = '#2c3e50';
    }
}
