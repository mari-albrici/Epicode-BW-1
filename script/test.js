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

let numeroDomande = 0 // VARIABILE GLOBALE 

//PICK RANDOM DELLE DOMANDE, FUNZIONA!
let indiceCasuale = questions[Math.floor(Math.random()*questions.length)]
    console.log(indiceCasuale)

/*-----------------------------------------------*/
//CREAZIONE HTML
function timer(){
    page = document.querySelector('#pagina')
    let timerDiv = document.createElement('div');
    timerDiv.classList.add('countdown');
    let svg = document.createElement('svg');
    let circle1 = document.createElement('circle');
    let circle2 = document.createElement('circle');
    svg.setAttribute('viewBox','-50 -50 100 100');
    svg.setAttribute('stroke-width',10);
    circle1.setAttribute('r',45);
    circle2.setAttribute('r',45);
    circle2.setAttribute('stroke-dasharray',282.7433388230814)
    circle2.setAttribute('stroke-dashoffset',282.7433388230814)
    svg.append(circle1);
    svg.append(circle2);
    timerDiv.append(svg);
    page.append(timerDiv);
    
}
timer()


function createHTML(){
    //timer
    

    //box domanda
    let page = document.querySelector('#pagina')
    let exambox = document.querySelector('.exambox');
    let questionBox = document.createElement('div');
    questionBox.classList.add('question');
    exambox.append(questionBox);
    page.append(exambox)

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
            window.location.href = resultsPage()
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


//Creazione pagina results 
function resultsPage(){
        let page = document.createElemen('pagina')
        let main = document.createElement('main');
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


//counter domande