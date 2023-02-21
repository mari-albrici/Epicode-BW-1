/* PER SELEZIONARE TESTO DA PRESENTARE NEL CIRCLE IN BASE AL SUPERAMENTO O MENO DEL TEST

let congratsMessage = document.getElementById('congrats')
let underTitle = document.getElementById('passed');
let message = document.getElementById('message');

if (progress => 60) {
    congratsMessage.innerHTML = 'Congratulations!'
    underTitle.innerHTML = 'You passed the exam.'
    message.innerHTML = 'We'll send you the certificate in a few minutes. Check your email (including the promotions/spam folder)'
} else {
    congratsMessage.innerHTML = 'We're sorry'
    underTitle.innerHTML = 'You did not pass the exam.'
    message.innerHTML = 'Check your email (including the promotions/spam folder)'
}
*/