const questions = [
    {
      question: "Eighteen thousandths, written as a decimal, is:",
      answers: [
        {text: "0.0018", correct: true},
        {text: "0.018", correct: false},
        {text: "0.18", correct: false},
        {text: "213123", correct:false},
      ]
    },
    {
        question: "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
      answers: [
        {text:"12", correct: false},
        {text:"13", correct: false},
        {text:"14", correct: false},
        {text:"15", correct: true},
      ],
    }
]
const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answers");
const nextBtn = document.getElementById("next");

let currentQuestionIndex = 0;
let score  = 0;

function StartQuiz(){
    let currentQuestionIndex = 0;
    let score  = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextBtn.style.display='none';
    while (answerBtn.firstChild){
        answerBtn.removeChild(answerbuttons.firstChild);
    }
}

function selectAnswer(e){
 const selectedBtn = e.target;
 const isCorrect = selectedBtn.dataset.correct === true;
 if (isCorrect){
    selectedBtn.classList.add("correct");
 }
 else{
    selectedBtn.classList.add("incorrect");
 }
}
StartQuiz();