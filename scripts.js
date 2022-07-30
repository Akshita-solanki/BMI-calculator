
function bmi_calc() {
    var weight = parseInt(document.querySelector(".inputt-w").value);
    var height = parseInt(document.querySelector(".inputt-h").value);
    bmi = (weight / Math.pow((height / 100), 2)).toFixed(1);
    document.querySelector(".bmi").innerHTML = "Your BMI is: " + bmi;
    if (bmi < 18.5) {
        document.querySelector(".result").innerHTML = "Underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        document.querySelector(".result").innerHTML = "Normal Weight";

    }
    else if (bmi >= 25 && bmi <= 29.9) {
        document.querySelector(".result").innerHTML = "Overweight";
    }
    else if (bmi > 29.9) {
        document.querySelector(".result").innerHTML = "Obese";
    }
}
bmi_calc();