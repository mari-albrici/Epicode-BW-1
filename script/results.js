var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

const input = document.querySelector('input');
setProgress(input.value);

input.addEventListener('change', function (e) {
    if (input.value < 101 && input.value > 0) {
        setProgress(input.value);
    }
})


let correctPercentage = document.querySelector('input').value
let topMessage = document.getElementById('#topMessage');
let middleMessage = document.getElementById('#middleMessage');
let underMessage = document.getElementById('#underMessage');

function message() {
    if (correctPercentage => 60) {
        topMessage.innerHTML = 'Congratulations!'
        middleMessage.innerHTML = 'You passed the exam.'
        underMessage.innerHTML = 'We\'ll send you the certificate in a few minutes. Check your email (including the promotions/spam folder)'
    } else {
        topMessage.innerHTML = 'We\'re sorry'
        middleMessage.innerHTML = 'You did not pass the exam.'
        underMessage.innerHTML = 'Check your email (including the promotions/spam folder)'
    }
}
