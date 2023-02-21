
let resultMessage = document.getElementById('congrats')
let underTitle = document.getElementById('passed');
let finalMessage = document.getElementById('message');

let correctPercentage = document.getElementById('#correctPercentage');
let wrongPercentage = document.getElementById('#wrongPercentage');

function message() {
    if (correctPercentage => 60) {
    resultMessage.innerHTML = 'Congratulations!'
    underTitle.innerHTML = 'You passed the exam.'
    finalMessage.innerHTML = 'We\'ll send you the certificate in a few minutes. Check your email (including the promotions/spam folder)'
} else {
    resultMessage.innerHTML = 'We\'re sorry'
    underTitle.innerHTML = 'You did not pass the exam.'
    finalMessage.innerHTML = 'Check your email (including the promotions/spam folder)'
} 
}

