let input = document.querySelector('input');
let array1 = [];

localStorage.getItem('items', JSON.stringify(array1));

let bottone = document.getElementById('btn-to-welcome')

bottone.addEventListener('click', function salvare() {
    array1.push(input.value);
    localStorage.setItem('items', JSON.stringify(array1));    
});
//localStorage.clear();
function stellacoloratorMarkII() {
  let stars = document.querySelectorAll("path");
  stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
      stars.forEach((star, index2) => {
        index1 >= index2
          ? star.classList.add("active")
          : star.classList.remove("active");
      });
    });
  });
}
stellacoloratorMarkII();

let questions = [
  {
    question: "Qual è il tuo nome?",
    rightAnswer: "Matteo",
    wrongAnswers: ["Andrea", "Marianna", "Michele"],
  },
  {
    question: "Quanto costa una pizza Hawaiian?",
    rightAnswer: "50",
    wrongAnswers: ["5", "25", "1"],
  },
  {
    question: "Qual'è la pizza preferita di Michele?",
    rightAnswer: "Diavola",
    wrongAnswers: ["Margherita", "Hawaiana", "Capricciosa"],
  },
  {
    question: "What does CPU stand for?",
    rightAnswer: "Central Processing Unit",
    wrongAnswers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    question: "In web design, what does CSS stand for?",
    rightAnswer: "Cascading Style Sheet",
    wrongAnswers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    question: "On Twitter, what is the character limit for a Tweet?",
    rightAnswer: "140",
    wrongAnswers: ["120", "160", "100"],
  },
  {
    question: "Quante volte hai dovuto ricominciare questo progetto?",
    rightAnswer: "20",
    wrongAnswers: ["10", "MAI", "1"],
  },
  {
    question:
      "Which programming language shares its name with an island in Indonesia?",
    rightAnswer: "Java",
    wrongAnswers: ["Python", "C", "Jakarta"],
  },
  {
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    rightAnswer: "Nougat",
    wrongAnswers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    question: "Di che colore è il cielo?",
    rightAnswer: "Sicilia",
    wrongAnswers: ["2", "Forchetta", "Pizzicotto"],
  },
];

// Nascondi tutti gli elementi tranne l'header
document.getElementById("matteo").style.display = "none";
document.getElementById("andrea").style.display = "none";
document.getElementById("marianna").style.display = "none";

// Aggiungi un evento al pulsante "Procedi" dell'header per mostrare solo il main con id "matteo"
document
  .getElementById("btn-to-welcome")
  .addEventListener("click", function () {
    // Nascondi tutti gli elementi tranne il main con id "matteo"
    document.getElementById("emanuele").style.display = "none";
    document.getElementById("andrea").style.display = "none";
    document.getElementById("marianna").style.display = "none";
    document.getElementById("matteo").style.display = "block";
  });

document.getElementById("btn-to-test").addEventListener("click", function () {
  document.getElementById("emanuele").style.display = "none";
  document.getElementById("andrea").style.display = "block";
  document.getElementById("marianna").style.display = "none";
  document.getElementById("matteo").style.display = "none";
});

//TIMER

let countDownTotal = 10 + 2;
let clock = 1;
let timeLeft;
let rolex = document.querySelector('.rolex')

let rolexTimer =  setInterval(function () {
    if(document.getElementById("andrea").style.display == "block"){
        if (timeLeft == 0 ) {
        counter++;
        counterElement.innerHTML = "Domanda :" + counter;
        clearInterval(rolexTimer);
        newQuestion();
        //domanda invalidata
        
        } else {
        for (i = 0; i <= countDownTotal; i++) {
        clock += 1;
        timeLeft = countDownTotal - clock;
        document.querySelector(".rolex").innerHTML = timeLeft + " seconds remaining ";
        return timeLeft;
        }  
        
        }
    }
}, 1000)
;




let newQuestion = function () {
    
    

    let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    questionElement.innerText = randomQuestion.question;
    questions.splice(
    questions.findIndex((i) => i.question === randomQuestion.question),1);

    let answers = [...randomQuestion.wrongAnswers, randomQuestion.rightAnswer];
    answerButtons.forEach((button, index) => {
    button.innerText = answers[index];
    button.dataset.correct = answers[index] === randomQuestion.rightAnswer;

    //QUESTO NON FUNZIONA
    button.addEventListener("click", function () {
        if (button.dataset.correct === "true") {
        // ???????????????????????????????????
        // Incrementa il contatore per le risposte corrette
        correctAnswers++;
        } else {
        // Incrementa il contatore per le risposte sbagliate
        wrongAnswers++;
        }
        });
    });
};


// Seleziona gli elementi HTML che devono essere aggiornati
let questionElement = document.getElementById("question");
let answerButtons = document.querySelectorAll(".answer-buttons");
let counterElement = document.getElementById("counter");
let correctAnswersElement = document.getElementById("correctQuestions"); //lascia perdere
let wrongAnswersElement = document.getElementById("wrongQuestions"); //lascia perdere
let nextQuestionButton = document.getElementById("il-bottone-dei-bottoni");

let counter = 0;
let correctAnswers = [];
let wrongAnswers = [];

answerButtons.forEach(function(button) {
  button.addEventListener("click", function () {
    // Rimuovi la classe 'selected' da tutti gli altri bottoni
    answerButtons.forEach(function(otherButton) {
      if (otherButton !== button) {
        otherButton.classList.remove("selected")
      }
    });

    // Aggiungi o rimuovi la classe 'selected' dal bottone cliccato
    if (button.classList.contains("selected")) {
      button.classList.remove("selected")
    } else {
      button.classList.add("selected")
    }
  });
});

nextQuestionButton.addEventListener("click", function () {
  // Rimuovi la classe 'selected' da tutti i bottoni
  answerButtons.forEach(function(button) {
    button.classList.remove("selected")
  });
  

});
// Aggiungi un evento al pulsante "Il bottone dei bottoni" per generare una nuova domanda
document
  .getElementById("il-bottone-dei-bottoni")
  .addEventListener("click", function () {
    counter++;
    counterElement.innerHTML = counter + "/10";

    if (counter === 11) {
      //si va da marianna
      document.getElementById("matteo").style.display = "none";
      document.getElementById("andrea").style.display = "none";
      document.getElementById("emanuele").style.display = "none";

      document.getElementById("marianna").style.display = "block";

      correctAnswersElement.innerText = correctAnswers; //serve per far displayare le risposte corrette da marianna
      wrongAnswersElement.innerText = wrongAnswers; //uguale che a sopra
    } else {
      //senno si randomizza domanda
      // Scegli una domanda casuale dall'array
      let randomQuestion =
        questions[Math.floor(Math.random() * questions.length)];

      // Aggiorna il testo della domanda
      questionElement.innerText = randomQuestion.question;
      questions.splice(
        questions.findIndex((i) => i.question === randomQuestion.question),
        1
      );

        // Crea un array con tutte le risposte (giusta e sbagliate ps: si può fare solo in questo modo ) 
        let answers = [...randomQuestion.wrongAnswers, randomQuestion.rightAnswer]

        answerButtons.forEach((button, index) => {
            button.innerText = answers[index]
            button.dataset.correct = (answers[index] === randomQuestion.rightAnswer)
            button.addEventListener("click", function () {
                if (button.dataset.correct === "true") { 
                    correctAnswers.length++;
                    
                }
                else {
                    wrongAnswers.length++;
                }
            });
        });
        //TEORICAMENTE HA SENSO QUELLO CHE C'E SCRITTO QUI SOPRA, MA NON RIESCO A CAPIRE COME E SE MODIFICARLO
    }
  });

//CERCHIO PERCENTUALE RISPOSTE MARI - SE FUNZIONASSE...

var circle = document.querySelector("circle");
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

let correctPercentage = document.getElementById("correctPercentage");
correctPercentage.innerText = `${correctAnswersElement} %`;
let wrongPercentage = document.getElementById("wrongPercentage");
wrongPercentage.innerText = `${wrongAnswersElement} %`;

setProgress(correctAnswers.length*10);

if (correctAnswers < 101 && correctAnswers > 0) {
    setProgress(correctAnswers);
}

let topMessage = document.getElementById('topMessage');
let middleMessage = document.getElementById('middleMessage');
let underMessage = document.getElementById('underMessage');

function message() {
    if (correctAnswers.length*10 >= 60) {
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
