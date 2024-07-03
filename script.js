function calculateTip() {
    document.getElementById('billAmountError').innerText = '';
    document.getElementById('customTipError').innerText = '';
    document.getElementById('splitByError').innerText = '';


    let billAmount = parseFloat(document.getElementById('billAmount').value); //Holt den Betrag der Rechnung
    
    let tipPercentage = document.getElementById('tipPercentage').value; //Holt den Trinkgeldbetrag


    if (tipPercentage === 'custom') { //Wenn der Trinkgeldbetrag "eigene" audgewählt wurde
        document.getElementById('customTipContainer').style.display = 'block';
        tipPercentage = parseFloat(document.getElementById('customTip').value) / 100;
    } else {
        document.getElementById('customTipContainer').style.display = 'none';
        tipPercentage = parseFloat(tipPercentage);
    }

    let numberOfPeople = parseInt(document.getElementById('splitBy').value); //Durch wieviele Leute geteilt wird

    let valid = true; // Überprüt auf Errors und würde dann Fehlermeldung geben

    if (isNaN(billAmount) || billAmount <= 0) {
        document.getElementById('billAmountError').innerText = 'Please enter a valid bill amount'; // Wenn rechnung = 0 ist, kommt Fehlermeldung
        valid = false;
    }

    if (tipPercentage === 'custom' && (isNaN(tipPercentage) || tipPercentage < 0)) {
        document.getElementById('customTipError').innerText = 'Please enter a valid tip percentage'; // Wenn Trinkgeld = 0 ist kommt Fehlermeldung
        valid = false;
    }

    if (isNaN(numberOfPeople) || numberOfPeople <= 0) {
        document.getElementById('splitByError').innerText = 'Please enter a valid number of people'; // Wenn Menschen = 0 sind kommt Fehlermeldung
        valid = false;
    }

    if (!valid) {
        return; // Stoppt die Berechnung wenn ein Input falsch ist
    }

    let tipAmount = billAmount * tipPercentage; //Berechnet den Trinkgeldbetrag

    let totalAmount = billAmount + tipAmount; // Berechnet den totalen Betrag der Rechnung mit Trinkgeld

    let amountPerPerson = totalAmount / numberOfPeople; // Berechnet den Betrag mit Trinkgeld pro Person

    document.getElementById('tipAmount').innerText = tipAmount.toFixed(2); //Updatet die UI mit den berechneten Werten
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
    document.getElementById('amountPerPerson').innerText = amountPerPerson.toFixed(2);
}
