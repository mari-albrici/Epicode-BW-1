//index

function indexPage(){

    let main = document.querySelector('#page-1');
    stellacoloratorMarkII()
    let divbtn = document.createElement('div');
    let btn = document.createElement('button');
    divbtn.classList.add('containar_button');
    btn.setAttribute('onclick', '#')
    btn.setAttribute('type', 'button');
    btn.textContent = 'PROCEED';
    divbtn.appendChild(btn);
    main.appendChild(divbtn);
    btn.addEventListener('click', function(){
        welcomeCreate();
        //main.setAttribute('id','ic');
      });
}
indexPage()

function stellacoloratorMarkII(){
  let stars = document.querySelectorAll('path');
  stars.forEach((star,index1) => {
    star.addEventListener('click', ()=> {
      stars.forEach((star,index2) => {
        index1>=index2 ? star.classList.add('active') : star.classList.remove('active');
      })
    })
  })
}
//--------------------------------------------------------------SEZIONE 2---
function welcomeCreate(){
    let main2 = document.querySelector('#page-2');
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    let pwelcome = document.createElement('p');
    let ulWelcome = document.createElement('ul');
    let liWelcome1 = document.createElement('li');
    let liWelcome2 = document.createElement('li');
    let liWelcome3 = document.createElement('li');
    let divWelcomeFooter = document.createElement('div');
    let label = document.createElement('label');
    let input = document.createElement('input');
    let span = document.createElement('span');
    let btn = document.createElement('button');

    h1.setAttribute('id','welcome-heading');
    h1.innerHTML = 'Welcome to your exam';
    h2.innerHTML = 'Instructions';
    pwelcome.classList.add('text');
    pwelcome.innerHTML = 'We don\'t expect most engineers to know the answers to all of these questions,so don\'t worry if you\'re unsure of a few of them.'; //interpolazione stringhe su innerhtml per integrare i br e il bold per il testo
    liWelcome1.classList.add('text');
    liWelcome2.classList.add('text');
    liWelcome3.classList.add('text');
    liWelcome1.innerHTML = 'Each question is timed and can only be answered once'
    liWelcome2.innerHTML = 'Changing browser tab or opening other windows will invalidate the questions'
    liWelcome3.innerHTML = 'This exam will take approx. 0-5 minutes'
    ulWelcome.appendChild(liWelcome1);
    ulWelcome.appendChild(liWelcome2);
    ulWelcome.appendChild(liWelcome3);
    main2.appendChild(h1);
    main2.appendChild(h2);
    main2.appendChild(pwelcome);
    main2.appendChild(ulWelcome);
    divWelcomeFooter.setAttribute('id','welcome-footer');
    label.setAttribute('for', 'checkbox');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'checkbox');
    // input.setAttribute(' ','required');
    btn.innerHTML = 'START TEST';
    btn.classList.add('btnToTest');
    btn.addEventListener('click', function(){
      createHTML();
      main2.setAttribute('id','ic');
    });
    span.innerHTML = 'I promise to answer myself without help from anyone';
    label.appendChild(input);
    label.appendChild(span);
    divWelcomeFooter.appendChild(label);
    divWelcomeFooter.appendChild(btn);
    main2.appendChild(divWelcomeFooter);
}

//--------------------------------------------------------------SEZIONE 3---
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



function createHTML(){
    //timer
    

    //box domanda
    let main3 = document.querySelector('#pagina_3')
    let exambox = document.createElement('div');
    exambox.classList.add('exambox');
    let questionBox = document.createElement('div');
    questionBox.classList.add('question');
    exambox.appendChild(questionBox);
    main3.appendChild(exambox)

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
    
    //bottone validate
    let nextQuestion = document.createElement('button');
        nextQuestion.setAttribute('id','nuova-domanda');
        nextQuestion.setAttribute('type','button');
        nextQuestion.innerHTML = 'Validate/Next question';
        main3.appendChild(nextQuestion);
        nextQuestion.addEventListener("click", function (){
          validate()
        })

random()
answers()
validate()
}

timer()
function validate(){
                  let exambox = document.querySelector(".exambox")
                  exambox.innerHTML = "" 
                  if (numeroDomande < questions.length){
                      createHTML()
                      random()
                      answers()
                      numeroDomande++
                      }else{
                      //INSERIRE QUI FUNZIONE PER SEZIONE 4
                      }
                    let domandeFatte = document.querySelector(".questionsDone")
                    domandeFatte.textContent = numeroDomande
                    setTimeout(function(){
                    window.location.reload()
                    },40000)
                    clearTimeout()
                    }



/*-----------------------------------------------*/
//RANDOMIZZAZIONE DOMANDE
    function random(){
    let randQ = indiceCasuale.question
    let qPick = document.querySelector('.question').innerHTML = randQ
}

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


/*-----------------------------------------------*/
//TASTO VALIDAZIONE
function validate(){
    let nextQuestion = document.createElement('button');
    nextQuestion.setAttribute('id','nuova-domanda');
    nextQuestion.setAttribute('type','button');
    nextQuestion.innerHTML = 'Validate/Next question';
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
            window.location.href = "results.html"//INSERIRE QUI FUNZIONE PER SEZIONE 4
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

//--------------------------------------------------SEZIONE 4---
function resultsPage() {

    let main4 = document.querySelector('main');
  
    //titolo
    let titolone = document.createElement('div'); 
      titolone.setAttribute('id','titolone');
    let title = document.createElement('h1');
      title.setAttribute('id','title');
      title.textContent = 'Results';
    let underTitle = document.createElement('p')
      underTitle.setAttribute('id', 'underTitle');
      underTitle.textContent = 'The summary of your answers:'
   
    titolone.appendChild(title);
    titolone.appendChild(underTitle);
    main4.appendChild(titolone);
    
  
    //middle section
    let middleSection = document.createElement('div');
      middleSection.setAttribute('id','middle');
    let wrapper = document.createElement('div');
      wrapper.setAttribute('id','wrapper');
    
    middleSection.appendChild(wrapper);
    main4.appendChild(middleSection);
  
    //correct section
    let correct = document.createElement('div');
      correct.setAttribute('id','correct');
    let correctTitle = document.createElement('h3');
      correctTitle.setAttribute('id','correctTitle');
      correctTitle.textContent = 'Correct'
    let correctPercentage = document.createElement('input');
      correctPercentage.setAttribute('id','correctPercentage');
    let correctQuestions = document.createElement('p');
      correctQuestions.setAttribute('id','correctQuestions');
      correctQuestions.textContent = '0/0 questions'
  
    correct.appendChild(correctTitle);
    correct.appendChild(correctPercentage);
    correct.appendChild(correctQuestions);
    wrapper.appendChild(correct);
  
    //ring section  
    let container = document.createElement('div');
      container.setAttribute('id','container');
  
    let svg = document.createElement('svg')
      svg.setAttribute('id','progress-ring');
    let circle = document.createElement('circle');
      circle.setAttribute('id','progress-ring__circle');
    
      let message = document.createElement('div');
      message.setAttribute('id','message');
    let topMessage = document.createElement('h3');
      topMessage.setAttribute('id','topMessage');
    let middleMessage = document.createElement('h3');
      middleMessage.setAttribute('id','middleMessage');
    let underMessage = document.createElement('p');
      underMessage.setAttribute('id','underMessage');
  
    svg.appendChild(circle);
    container.appendChild(svg);
    
    message.appendChild(topMessage);
    message.appendChild(middleMessage);
    message.appendChild(underMessage);
  
    container.appendChild(message);
    wrapper.appendChild(container);
  
    //wrong section
    let wrong = document.createElement('div');
    wrong.setAttribute('id','wrong');
    let wrongTitle = document.createElement('h3');
    wrongTitle.setAttribute('id','wrongTitle');
    wrongTitle.textContent = 'Wrong'
    let wrongPercentage = document.createElement('p');
    wrongPercentage.setAttribute('id','wrongPercentage');
    let wrongQuestions = document.createElement('p');
    wrongQuestions.setAttribute('id','wrongQuestions');
    wrongQuestions.textContent = '0/0 questions'
  
    wrong.appendChild(wrongTitle);
    wrong.appendChild(wrongPercentage);
    wrong.appendChild(wrongQuestions);
  
  
  wrapper.appendChild(correct);
  wrapper.appendChild(container);
  wrapper.appendChild(wrong);
  
    //button  
    let page = document.querySelector('#pagina');
  
    let checkAnswer = document.createElement('button');
    checkAnswer.setAttribute('id','checkAnswer');
    checkAnswer.textContent = 'Check Answers';
    checkAnswer.addEventListener("click",function(){
      checkAnswerPopup()
    })

page.appendChild(main4);
page.appendChild(checkAnswer);

}

function checkAnswerPopup() {
  //main element
  let popup = document.createElement('div');
  popup.setAttribute('id','popup');

  //titolo
  let popupTitle = document.createElement('h2');
  popupTitle.setAttribute('id','popupTitle');
  popupTitle.textContent = 'Check your answers';

  //box singola domanda e risposte + risposta giusta
  let fullQuestions = document.createElement('div');
  fullQuestions.setAttribute('id','fullQuestions');
  let qs = document.createElement('h4');
  qs.setAttribute('id','qs');
  let ans = document.createElement('p');
  ans.setAttribute('id','ans');
  let correctAnswer = document.createElement('p');
  correctAnswer.setAttribute('id','correctAnswer');

}