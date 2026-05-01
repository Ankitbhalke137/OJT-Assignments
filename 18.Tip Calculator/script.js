function calculateTip() {
    const bill = parseFloat(document.getElementById('bill').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const resultBox = document.getElementById('resultBox');
    const tipAmountDisplay = document.getElementById('tipAmount');
    const totalBillDisplay = document.getElementById('totalBill');

    if (isNaN(bill) || bill <= 0) {
        alert("Please enter a valid bill amount.");
        return;
    }

    const tip = isNaN(tipPercentage) ? 0 : tipPercentage;
    const tipAmount = (bill * tip) / 100;
    const totalBill = bill + tipAmount;

    tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
    totalBillDisplay.textContent = `$${totalBill.toFixed(2)}`;
    resultBox.style.display = 'block';
}
