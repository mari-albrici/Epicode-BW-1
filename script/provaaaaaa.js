function stellacoloratorMarkII(){
    let stars = document.querySelectorAll('path');
    stars.forEach((star,index1) => {
    star.addEventListener('click', ()=> {
    stars.forEach((star,index2) => {
    index1>=index2 ? star.classList.add('active') : star.classList.remove('active');
    })
})
})
}stellacoloratorMarkII()
let questions = [{
question: "Qual'è la pizza preferita di Michele?",
rightAnswer: "Diavola",
wrongAnswers:["Margherita","Hawaiana", "Capricciosa"]
},
{
question: "What does CPU stand for?",
rightAnswer: "Central Processing Unit",
wrongAnswers:["Central Process Unit","Computer Personal Unit","Central Processor Unit"]
},
{
question: "In web design, what does CSS stand for?",
rightAnswer: "Cascading Style Sheet",
wrongAnswers:[ "Counter Strike: Source",
"Corrective Style Sheet",
"Computer Style Sheet"]
},
{
question: "On Twitter, what is the character limit for a Tweet?",
rightAnswer: "140",
wrongAnswers:["120", "160", "100"]
},
{
question: "Which programming language shares its name with an island in Indonesia?",
rightAnswer: "Java",
wrongAnswers:["Python", "C", "Jakarta"]
},
{
question: "What is the code name for the mobile operating system Android 7.0?",
rightAnswer: "Nougat",
wrongAnswers:["Ice Cream Sandwich",
"Jelly Bean",
"Marshmallow"]
}]

// Nascondi tutti gli elementi tranne l'header
document.getElementById("matteo").style.display = "none"
document.getElementById("andrea").style.display = "none"
document.getElementById("marianna").style.display = "none"

// Aggiungi un evento al pulsante "Procedi" dell'header per mostrare solo il main con id "matteo"
document.getElementById("btn-to-welcome").addEventListener("click", function() {
// Nascondi tutti gli elementi tranne il main con id "matteo"
document.getElementById("emanuele").style.display = "none"
document.getElementById("andrea").style.display = "none"
document.getElementById("marianna").style.display = "none"
document.getElementById("matteo").style.display = "block"
});

document.getElementById("btn-to-test").addEventListener("click",function(){
document.getElementById("emanuele").style.display ="none"
document.getElementById("andrea").style.display = "block"
document.getElementById("marianna").style.display = "none"
document.getElementById("matteo").style.display = "none"
})


// Seleziona gli elementi HTML che devono essere aggiornati
let questionElement = document.getElementById("question")
let answerButtons = document.querySelectorAll(".answer-buttons")
let counterElement = document.getElementById("counter")
let correctAnswersElement = document.getElementById("correctQuestions") //lascia perdere
let wrongAnswersElement = document.getElementById("wrongQuestions") //lascia perdere


let counter = 0
let correctAnswer = 0 //lascia perdere
let wrongAnswers = 0//lascia perdere

// Aggiungi un evento al pulsante "Il bottone dei bottoni" per generare una nuova domanda
document.getElementById("il-bottone-dei-bottoni").addEventListener("click", function() {
counter++
counterElement.innerHTML = "Domanda :" + counter


if (counter === 6){ //si va da marianna
document.getElementById("matteo").style.display = "none"
document.getElementById("andrea").style.display = "none"
document.getElementById("emanuele").style.display = "none"

document.getElementById("marianna").style.display = "block"

correctAnswersElement.innerText = correctAnswer //serve per far displayare le risposte corrette da marianna
wrongAnswersElement.innerText = wrongAnswers //uguale che a sopra


}else{ //senno si randomizza domanda 
// Scegli una domanda casuale dall'array
let randomQuestion = questions[Math.floor(Math.random() * questions.length)]

// Aggiorna il testo della domanda
questionElement.innerText = randomQuestion.question







// Crea un array con tutte le risposte (giusta e sbagliate ps: si può fare solo in questo modo ) 
let answers = [...randomQuestion.wrongAnswers, randomQuestion.rightAnswer]
//console.log(answers)




// QUESTO è per randomizzare le risposte trovato su internet quello che abbaimo fatto l'altro giorno non fuzniona piu e in più IN TEORIA dovrebbe salvare le risposte giuste con dataset ma non funge 
answerButtons.forEach((button, index) => {
    button.innerText = answers[index]
    button.dataset.correct = (answers[index] === randomQuestion.rightAnswer)
  

    //QUESTO NON FUNZIONA

    button.addEventListener("click", function() {
        if (button.dataset.correct === "true") { // ???????????????????????????????????
            // Incrementa il contatore per le risposte corrette
            correctAnswers++;
        }
        else {
            // Incrementa il contatore per le risposte sbagliate
            wrongAnswers++;
        }
    });

    
});

}

});


//CERCHIO PERCENTUALE RISPOSTE MARI - SE FUNZIONASSE...

var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

let inputPercentuale = document.querySelector('input');
setProgress(inputPercentuale.value);

inputPercentuale.addEventListener('change', function (e) {
    if (inputPercentuale.value < 101 && input.value > 0) {
        setProgress(input.value);
    }
})


let topMessage = document.getElementById('topMessage');
let middleMessage = document.getElementById('middleMessage');
let underMessage = document.getElementById('underMessage');

inputPercentuale.addEventListener('keydown', function (event) {
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