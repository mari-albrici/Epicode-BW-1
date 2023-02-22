function resultsPage() {
    let page = document.querySelector('pagina')
    let main = document.querySelector('main');
    page.appendChild(main);

    //titolo
    let titolone = document.createElement('div');
    let title = document.createElement('h1');
    let underTitle = document.createElement('p')
    titolone.classList.add('titolone');
    titolone.appendChild(title, underTitle);
    title.classList.add('title');
    title.textContent = 'Results';
    underTitle.classList.add('underTitle');
    underTitle.textContent = 'The summary of your answers:'

    //middle section
    let middleSection = document.createElement('div');
    middleSection.classList.add('middle');
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    middleSection.appendChild(wrapper);

    //correct section
    let correct = document.createElement('div');
    correct.classList.add('correct');
    let correctTitle = document.createElement('h3');
    correctTitle.classList.add('correctTitle');
    correctTitle.textContent = 'Correct'
    let correctPercentage = document.createElement('input');
    correctPercentage.classList.add('correctPercentage');
    let correctQuestions = document.createElement('p');
    correctQuestions.classList.add('correctQuestions');
    correctQuestions.textContent = 'a/b questions'
    correct.appendChild(correctTitle, correctPercentage, correctQuestions);

    //ring section  
    let container = document.createElement('div');
    container.classList.add('container');
    let svg = document.createElementNS('svg')
    svg.classList.add('progress-ring');
    let circle = document.createElementNS('circle');
    circle.classList.add('progress-ring__circle');
    svg.appendChild(circle);
    let message = document.createElement('div');
    message.classList.add('message');
    let topMessage = document.createElement('h3');
    topMessage.classList.add('topMessage');
    let middleMessage = document.createElement('h3');
    middleMessage.classList.add('middleMessage');
    let underMessage = document.createElement('p');
    underMessage.classList.add('underMessage');
    message.appendChild(topMessage, middleMessage, underMessage);
    container.appendChild(svg, message);

    //wrong section
    let wrong = document.createElement('div');
    wrong.classList.add('wrong');
    let wrongTitle = document.createElement('h3');
    wrongTitle.classList.add('wrongTitle');
    wrongTitle.textContent = 'Wrong'
    let wrongPercentage = document.createElement('p');
    wrongPercentage.classList.add('wrongPercentage');
    let wrongQuestions = document.createElement('p');
    wrongQuestions.classList.add('wrongQuestions');
    wrongQuestions.textContent = 'a/b questions'
    wrong.appendChild(wrongTitle, wrongPercentage, wrongQuestions);

    //button  
    let checkAnswer = document.createElement('button');
    checkAnswer.classList.add('checkAnswer');
    let button = document.createElement('button');
    checkAnswer.appendChild(button);

    wrapper.appendChild(correct, wrong, container);
    main.appendChild(titolone, middleSection, wrapper, checkAnswer);
}
resultsPage()





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


