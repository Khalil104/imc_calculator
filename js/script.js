function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('result');
    const recalculateBtn = document.getElementById('recalculate');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      resultDiv.textContent = "Veuillez entrer des valeurs valides pour le poids et la taille.";
      resultDiv.classList.add("text-danger");
      resultDiv.classList.remove("text-success");
      return;
    }

    const imc = (weight / (height * height)).toFixed(2);
    let message;

    if (imc < 18.5) {
      message = `Votre IMC est de ${imc}. Vous êtes en insuffisance pondérale.`;
    } else if (imc >= 18.5 && imc <= 24.9) {
      message = `Votre IMC est de ${imc}. Vous avez un poids normal.`;
    } else if (imc >= 25 && imc <= 29.9) {
      message = `Votre IMC est de ${imc}. Vous êtes en surpoids.`;
    } else {
      message = `Votre IMC est de ${imc}. Vous êtes en obésité.`;
    }

    resultDiv.textContent = message;
    resultDiv.classList.remove("text-danger");
    resultDiv.classList.add("text-success");

    recalculateBtn.classList.remove("d-none");
}

function resetForm() {
    document.getElementById('imcForm').reset();
    document.getElementById('result').textContent = "";
    document.getElementById('recalculate').classList.add("d-none");
}

// by Abdoul Rachid BISSARE / 01 63 61 49 80