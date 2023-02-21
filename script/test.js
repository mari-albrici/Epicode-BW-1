console.log('Hello World!')
//costruttore domande (Michele suggerisce classe)
let questions = JSON.stringify(new URL("questions.json"))
console.log(questions)

class QuestionMarkI{
    constructor(q,rAns,wAns){
        this.question= q;
        this.rightAns = rAns;
        this.wrongAns = wAns;
    }

    
    
    shuffle(){
        let box = document.querySelector('.question')
        
        
        
        //questions.sort => math.random
    }

    pickQuestion(){

    }

    validate(){

    }

}

//timer

function timer(){
    
}

//counter domande