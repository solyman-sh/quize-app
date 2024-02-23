const questions = [
    {
        question : "My mother is the _ ________ inspiration in my life ?",
        answers : [
            {Text: "big", correct: false},
            {Text: "bigger", correct: false},
            {Text: "biggest ", correct: true},
            {Text: "most biggest ", correct: false}

        ]
    },
    {
        question : "I watched him ________ ",
        answers : [
            {Text: "to falling ", correct: false},
            {Text: "to fell ", correct: false},
            {Text: "fell ", correct: false},
            {Text: "fall ", correct: true}

        ]
    },
    {
        question : "He is your brother, __________ ?",
        answers : [
            {Text: "isn't he ", correct: true},
            {Text: "isn't it ", correct: false},
            {Text: "is it  ", correct: false},
            {Text: "is he", correct: false}

        ]
    },
    {
        question : "This is the girl _________ is going to IIT, Delhi ?",
        answers : [
            {Text: "whom ", correct: false},
            {Text: "that ", correct: false},
            {Text: "who", correct: true},
            {Text: "which", correct: false}

        ]
    },
    {
        question : "Anand Kumar is ________ unique teacher ?",
        answers : [
            {Text: "no article", correct: false},
            {Text: "an", correct: false},
            {Text: "the", correct: false},
            {Text: "a", correct: true}

        ]
    }
];

// const questionElement = document.getElementById("question");
// const answerElement = document.getElementById("answer-button");
// const buttonElement = document.getElementById("next-btn");


// let currentQusIndex = 0;
// let score = 0;

// function getStartQuize(){
//     currentQusIndex = 0;
//     score = 0;
//     buttonElement.innerHTML = "Next";
//     fullQuestion();

// }
//  function fullQuestion(){
//     resetQuestion();
//     let currentQuestion = questions[currentQusIndex];
//     let questionNum= currentQuestion + 1;
//     questionElement.innerHTML = questionNum + ". " + currentQuestion.question;



//     currentQuestion.answers.forEach(answer =>{
//         const button = document.createElement("button");
//         button.innerHTML= answer.Text;
//         button.classList.add("btn");
//         answerElement.appendChild(button);




//         if(answer.correct){
//             button.dataset.correct= answer.correct;
//         }
//         button.addEventListener("click", selectAnswer);

//     })


//  }
// function resetQuestion(){
//     while(answerElement.firstChild){
//         answerElement.removeChild(answerElement.firstChild);
//     }
// }



// function selectAnswer(element){

//     let selectedButton = element.target;
//     let isCorrect = selectedButton.dataset.correct === "true";
//     if(isCorrect) {
//         selectedButton.classList.add("correct");
//         score++;
//     }else{
//         selectedButton.classList.add("incorrect");
//     }



//     Array.from(answerElement.children).forEach(button =>{
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     buttonElement.style.display = "block";


// }

// buttonElement.addEventListener("click", ()=>{
//     if(currentQusIndex < questions.length){
//         handleNxtBtn();
//     }else{
//         getStartQuize();
//     }
// })



// function handleNxtBtn(){
//     currentQusIndex++;
//     if(currentQusIndex < questions.length){
//         fullQuestion();
//     }else{
//         showScore();
//     }
// }







// function showScore(){
//     resetQuestion();
//     questionElement.innerHTML = `Your score : ${score} out of ${questions.length}`;

//     buttonElement.innerHTML = "play again";
//     buttonElement.style.display = "block";
    
// }



// getStartQuize()




const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");


// storage the question element
let currentQuestionIndex = 0;
let score = 0;

// start the quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){
    // for reset 
    resetQuestion();
    //for questions
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // for answers
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML= answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button);


        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
            

    });

}

// for reset
function resetQuestion(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


// for click handlers
function selectAnswer(e){

    let selectedButton = e.target;
    let isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
        
        
    }else{
        selectedButton.classList.add("incorrect");
    }




    // for chek button click
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}


// for into the next button
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


// defined the next button
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else {
        showScore();
    }
    
}


// for score

function showScore(){
    resetQuestion();
    questionElement.innerHTML =`your score ${score} out of ${ questions.length}! `;
    nextButton.innerHTML ="play Again";
    nextButton.style.display = "block";
}


startQuiz()






































