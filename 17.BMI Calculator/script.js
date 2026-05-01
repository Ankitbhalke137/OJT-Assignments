function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const result = document.getElementById('result');

    if (weight === '' || height === '' || weight <= 0 || height <= 0) {
        result.innerHTML = 'Please enter valid values.';
        result.style.color = 'red';
        result.style.backgroundColor = '#ffe6e6';
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    
    let category = '';
    let color = '';
    let bgColor = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#ffc107';
        bgColor = '#fff3cd';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        color = '#28a745';
        bgColor = '#d4edda';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        color = '#fd7e14';
        bgColor = '#ffe8cc';
    } else {
        category = 'Obese';
        color = '#dc3545';
        bgColor = '#f8d7da';
    }

    result.innerHTML = `BMI: ${bmi}<br>${category}`;
    result.style.color = color;
    result.style.backgroundColor = bgColor;
}
