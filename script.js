let massMark = 78; // kg
let heightMark = 1.69; // meters
let massJohn = 92;
let heightJohn = 1.95;

function calculateBMI(mass, height) {
    return Math.floor(mass / (height * height));
}

document.getElementById("result").innerHTML = ("Mark's BMI is " + calculateBMI(massMark, heightMark) + " and John's BMI is " + calculateBMI(massJohn, heightJohn) + ".");