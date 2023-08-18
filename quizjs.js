let questions=[
    {
        question:" Which is the largest animal in the world ?",
        answers:[
            
               { text:"shark",correct:"false" },
               { text:"Blue whale",correct:"true" },
               { text:"Elephant",correct:"false" },
               { text:"Giraffe",correct:"false" }

        ]
    },

    {
        question:" Which is the smallest country in the world ?",
        answers:[
            
               { text:"Vetican City",correct:"true" },
               { text:"Bhutan",correct:"false" },
               { text:"Nepal",correct:"false" },
               { text:"Sri Lanka",correct:"false" }

        ]
    },

    {
        question:" Who has highest runs in test cricket ?",
        answers:[
            
               { text:"Joe Root",correct:"false" },
               { text:"Steaven Smith",correct:"false" },
               { text:"Sachin tendulkar",correct:"true" },
               { text:"Aliester Cook",correct:"false" }

        ]
    },

    {
        question:" Which is the smallest continent in the world ?",
        answers:[
            
               { text:"Asia",correct:"false" },
               { text:"Africa",correct:"false" },
               { text:"Australia",correct:"true" },
               { text:"Arctic",correct:"false" }

        ]
    }

];
const questioneElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");
let btn=document.getElementsByClassName("btn");


let currentQuestionIndex=0;
score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next"
    showQuestion();
}

function showQuestion(){

    resetSate();
    let currentQuestion=questions[currentQuestionIndex]
    let questionNo=currentQuestionIndex+1;
    questioneElement.innerHTML=questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
      const button=document.createElement("button");
      button.innerHTML=answer.text;
      button.classList.add("btn")
      answerButton.appendChild(button);

      if(answer.correct){
        button.dataset.correct=answer.correct
      }

      button.addEventListener("click",selectAns)
          
    });
}

function selectAns(e){
    const selectedButton=e.target;
    const isCorrect=selectedButton.dataset.correct==="true";
    if(isCorrect){
        selectedButton.classList.add("correct");
        score++;
    }
    else{
        selectedButton.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        else{
            button.disabled=true;
        }
    });
    nextButton.style.display="block";

}
function handleNextButton(){
    currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
    showQuestion();
}
else{
    showScore();
}

    
}
function resetSate(){
    // nextButton.style.display= "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function showScore(){
    resetSate();
    questioneElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block"
}
 nextButton.addEventListener("click",()=>{
if(currentQuestionIndex < questions.length){
    handleNextButton();
}
else{
    startQuiz();
}
 });



startQuiz();


