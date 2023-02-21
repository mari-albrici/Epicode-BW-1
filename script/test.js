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
//CREAZIONE HTML

function createHTML(){
    //box domanda
    let exambox = document.querySelector('.exambox');
    let questionBox = document.createElement('div');
    questionBox.classList.add('question');
    exambox.append(questionBox);

    // ansbox
    let ansbox = document.createElement('div');
    ansbox.classList.add('ansbox');
    exambox.append(ansbox);

    //first and second row
    let firstrow = document.createElement('div');
    firstrow.classList.add('firstrow');
    ansbox.append(firstrow);

    let secondrow = document.createElement('div');
    secondrow.classList.add('secondrow');
    ansbox.append(secondrow);

    //box risposta giusta
    let rAnswerBox = document.createElement('button');
    rAnswerBox.classList.add('rAnsBtn');
    firstrow.append(rAnswerBox);

    //box risposte sbagliate
    let wAnswerBox0 = document.createElement('button');
    wAnswerBox0.classList.add('wa0');
    firstrow.append(wAnswerBox0);

    let wAnswerBox1 = document.createElement('button');
    wAnswerBox1.classList.add('wa1');
    secondrow.append(wAnswerBox1);

    let wAnswerBox2 = document.createElement('button');
    wAnswerBox2.classList.add('wa2');
    secondrow.append(wAnswerBox2);
}
createHTML()




/*-----------------------------------------------*/
//RANDOMIZZAZIONE DOMANDE
    function random(){
    let randQ = indiceCasuale.question
    let qPick = document.querySelector('.question').innerHTML = randQ
}
random()
/*-----------------------------------------------*/
//INSERIMENTO RISPOSTE
function answers(){
    let rAns = indiceCasuale.rightAnswer
    let rAnsPick = document.querySelector('.rAnsBtn').innerHTML = rAns
    let wAns0 = indiceCasuale.wrongAnswers[0]
    let wAnsPick1 = document.querySelector('.wa0').innerHTML = wAns0
    let wAns1 = indiceCasuale.wrongAnswers[1]
    let wAnsPick2 = document.querySelector('.wa1').innerHTML = wAns1
    let wAns2 = indiceCasuale.wrongAnswers[2]
    let wAnsPick3 = document.querySelector('.wa2').innerHTML = wAns2
}
answers()

/*-----------------------------------------------*/
//TASTO VALIDAZIONE
function validate(){
    let nextQuestion = document.getElementById("nuova-domanda")
    nextQuestion.addEventListener("click",function(){
        let exambox = document.querySelector(".exambox")
        exambox.innerHTML = "" 


        //resetta il time ogni volta che clicckiamo "nuova-domanda"
        clearTimeout()

        //creiamo nuove domande e risposte 
        indiceCasuale= questions[Math.floor(Math.random()* questions.length)]
        //fin quando è < 6 il contatore
        if (numeroDomande < questions.length){
            createHTML()
            random()
            answers()
            numeroDomande++
            //quando il contatore è a 6 va da marianna 
        }else{
            window.location.href = "results.html"
        }
        
        let domandeFatte = document.querySelector(".questionsDone")
        domandeFatte.textContent = numeroDomande


        //Refresh ogni 40 secondi
        setTimeout(function(){
            window.location.reload()
        },40000)
        //funzione per il timer figurativa perchè non è effettivamente collegata al timer 
    })
    
    
}
validate()










//counter domande