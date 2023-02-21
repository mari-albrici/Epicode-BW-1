var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

let input = document.querySelector('input');
setProgress(input.value);

input.addEventListener('change', function (e) {
    if (input.value < 101 && input.value > 0) {
        setProgress(input.value);
    }
})


let topMessage = document.getElementById('topMessage'); 
let middleMessage = document.getElementById('middleMessage');
let underMessage = document.getElementById('underMessage');

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        let percentage = Number(input.value); 
        function message() {
            if (percentage >= 60) { 
                topMessage.innerText = 'Congratulations!';
                middleMessage.innerText = 'You passed the exam.';
                underMessage.innerText = 'We\'ll send you the certificate in a few minutes. Check your email (including the promotions/spam folder)'
            } else {
                topMessage.innerText = 'We\'re sorry';
                middleMessage.innerText = 'You did not pass the exam.';
                underMessage.innerText = 'Check your email (including the promotions/spam folder)';
            }
        }
        message();
    }
})


