function calculateTip() {
    // Clear any previous error messages
    document.getElementById('billAmountError').innerText = '';
    document.getElementById('customTipError').innerText = '';
    document.getElementById('splitByError').innerText = '';

    // Get the bill amount
    let billAmount = parseFloat(document.getElementById('billAmount').value);
    
    // Get the selected tip percentage
    let tipPercentage = document.getElementById('tipPercentage').value;

    // Show/hide the custom tip input based on selection
    if (tipPercentage === 'custom') {
        document.getElementById('customTipContainer').style.display = 'block';
        tipPercentage = parseFloat(document.getElementById('customTip').value) / 100;
    } else {
        document.getElementById('customTipContainer').style.display = 'none';
        tipPercentage = parseFloat(tipPercentage);
    }

    // Get the number of people to split the bill by
    let numberOfPeople = parseInt(document.getElementById('splitBy').value);

    // Validate inputs and display error messages if invalid
    let valid = true;

    if (isNaN(billAmount) || billAmount <= 0) {
        document.getElementById('billAmountError').innerText = 'Please enter a valid bill amount';
        valid = false;
    }

    if (tipPercentage === 'custom' && (isNaN(tipPercentage) || tipPercentage < 0)) {
        document.getElementById('customTipError').innerText = 'Please enter a valid tip percentage';
        valid = false;
    }

    if (isNaN(numberOfPeople) || numberOfPeople <= 0) {
        document.getElementById('splitByError').innerText = 'Please enter a valid number of people';
        valid = false;
    }

    if (!valid) {
        return; // Stop the calculation if any input is invalid
    }

    // Calculate the tip amount
    let tipAmount = billAmount * tipPercentage;

    // Calculate the total amount (bill + tip)
    let totalAmount = billAmount + tipAmount;

    // Calculate the amount per person
    let amountPerPerson = totalAmount / numberOfPeople;

    // Update the UI with the calculated values
    document.getElementById('tipAmount').innerText = tipAmount.toFixed(2);
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
    document.getElementById('amountPerPerson').innerText = amountPerPerson.toFixed(2);
}
