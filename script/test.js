console.log('Hello World!')
//costruttore domande (Michele suggerisce classe)
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
console.log(questions[3])




class QuestionMarkI{
    
    
    
    
    pickQuestion(){
        
    }
    
}


let numeroDomande = 0 // VARIABILE GLOBALE 
 


//PICK RANDOM DELLE DOMANDE, FUNZIONA!
let indiceCasuale = questions[Math.floor(Math.random()*questions.length)]
    console.log(indiceCasuale)
/*-----------------------------------------------*/
    function random(){
    let randQ = indiceCasuale.question
    let qPick = document.querySelector('h1').innerHTML = randQ
    //COUNTER DOMANDE CHE BISOGNA AGGANGIARE QUI X FORZA
    numeroDomande++
    let domandeFatte = document.querySelector(".questionsDone")
    domandeFatte.textContent = numeroDomande
}





random()
/*-----------------------------------------------*/
function answers(){
    let rAns = indiceCasuale.rightAnswer
    let rAnsPick = document.querySelector('.rAnsBtn').innerHTML = rAns
    let wAns0 = indiceCasuale.wrongAnswers[0]
    let wAnsPick1 = document.querySelector('#wa0').innerHTML = wAns0
    let wAns1 = indiceCasuale.wrongAnswers[1]
    let wAnsPick2 = document.querySelector('#wa1').innerHTML = wAns1
    let wAns2 = indiceCasuale.wrongAnswers[2]
    let wAnsPick3 = document.querySelector('#wa2').innerHTML = wAns2
}
answers()
/*-----------------------------------------------*/
function validate(){
        let nextQuestion = document.getElementById("nuova-domanda")
        nextQuestion.addEventListener("click",random)
    }
validate()

//funzione per il timer figurativa perchè non è effettivamente collegata al timer 

setTimeout(function(){
    window.location.reload()
},40000)
    


//counter domande