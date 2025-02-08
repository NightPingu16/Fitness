function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100;
    let resultElement = document.getElementById('bmiResult');
    
    if (weight > 0 && height > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        resultElement.innerHTML = `Your BMI: <strong>${bmi}</strong> (${category})`;
    } else {
        resultElement.innerHTML = "<span style='color: red;'>Please enter valid weight and height!</span>";
    }
}