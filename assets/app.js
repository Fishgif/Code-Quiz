const buttonStart = document.getElementById("button-start");
const sectionQuestions = document.getElementById("section-questions");
const sectionLanding = document.getElementById("section-landing");
const sectionTimer = document.getElementById("section-timer");
const sectionInitials = document.getElementById("section-initials");
const spanTime = document.getElementById("span-time");
const questionTitle = document.getElementById("question-title");
const spanFinalHighScore = document.getElementById("span-final-highscore"); 
const questionChoices = document.getElementById("question-choices");
const questionFeedback = document.getElementById('question-feedback');
const formHighscore = document.getElementById('form-highscore');
const inputInitials = document.getElementById("input-initials");
const sectionHighscore = document.getElementById("section-highscore");
const buttonPlayAgain = document.getElementById("button-play-again");
const buttonClearHighscore = document.getElementById("button-clear-highscore");
const listHighScore = document.getElementById("list-highscore");


let timerId = null;
let timeRemaining = 20;

let currentQuestionIndex = 0;
spanTime.textContent = timeRemaining;


// When user click on start button
buttonStart.addEventListener('click', function(event){
    
// show questions section
sectionQuestions.classList.remove('hide')

// hide landing page 
sectionLanding.classList.add('hide');
startTimer();
showQuestion(0);
})

function showFeedback(message, timeout = 1000){

    // remove the hide class on question feedback element for 2 seconds
    questionFeedback.textContent = message
    questionFeedback.classList.remove('hide')

    setTimeout(function(){
questionFeedback.classList.add('hide')
    }, timeout)
}

// TIMER
// update the span time for everysecond
function startTimer(){
    // show section- timer
    sectionTimer.classList.remove('hide');
    // run update
    timerId = setInterval(function() {
        timeRemaining = timeRemaining - 1
        spanTime.textContent = timeRemaining

        // if time remaining is less than 0 seconds end the game
        if(timeRemaining <= 0){
        // End the game
        endGame();
        }
    
        

    }, 1000);

}

function showQuestion(index){
    const question = questions[index];

    questionTitle.textContent = question.title;
    

    // loop through choices

    // generate li for each choice

    questionChoices.textContent = "";

    for (let ii = 0; ii < question.choices.length; ii++) {
        const choice = question.choices[ii];
        
        const li = document.createElement('li');


        const button = document.createElement('button');
        button.textContent = choice.title;

        button.addEventListener('click', function(event){
            if(index + 1 >= questions.length){
                return endGame()
            }
            showQuestion(index + 1)
        });

        button.setAttribute('data-answer', choice.isAns);

        // When Click on choice
        button.addEventListener('click', function (event) {
            // What if user clicks on correct choice
            
            const isCorrectChoice = event.target.getAttribute("data-answer") ==='true';
            // console.log(isCorrectChoice);

            if(isCorrectChoice){
        // gives feed back its correct choice
        showFeedback('Right Answer');

         }else{
             showFeedback('Wrong Answer');
             timeRemaining = timeRemaining -10;

        }
            
    
})

        li.appendChild(button);

        questionChoices.appendChild(li);

    };
}

function endGame(){
// 1. Timer should stop
clearInterval(timerId)


// End Game Screen
// 1. Timer should stop
// 2. Show end game screen
sectionInitials.classList.remove('hide');

// hide Questions setcion 
sectionQuestions.classList.add('hide');
// 3.Show high Scores in the end game screen

spanFinalHighScore.textContent = timeRemaining;
// High score  - highest time remaining 

sectionTimer.classList.add('hide')

}




// END GAME SCREEN
// 1. User can type in the input box
formHighscore.addEventListener('submit', function(event){
event.preventDefault();
// 2. User can click the enter button on input box

// 3. User can click on submit
// Submit
// Submitting ----- Adds the User initials and high Csore to local storage
const userInput = inputInitials.value;

const highscore = {
name: userInput,
highscore: timeRemaining,

}


const existingHighscores = getHighscoresFromLocalStorage();
// Add new HS
existingHighscores.push(highscore)

// Re Save to LS
 localStorage.setItem('highscores', JSON.stringify(existingHighscores));



// After Submitting, redirect the user tot eh high score page
showHighscorePage()

});


/**
 * 
 * @returns {Array} 
 */

function getHighscoresFromLocalStorage(){
    return JSON.parse(
        localStorage.getItem('highscores')  || '[]')

}

function showHighscorePage(){
// Hide End Game page
sectionInitials.classList.add('hide');
sectionHighscore.classList.remove('hide');
renderHighscoreList();
}


function renderHighscoreList(){
// hspage
// get existing HS local S
const highscores = getHighscoresFromLocalStorage();

highscores.sort(function(a, b){
    if(b.highscore > a.highscore){
        return 1;
    }else {
        return -1;
    }
});

listHighScore.textContent = "";

// Creat li each item
for (let index = 0; index < highscores.length; index++) {
    const highscore = highscores[index];
   
    // add to lsit
    const li = document.createElement('li');
    li.textContent = highscore.name + ' -- ' + highscore.highscore

    listHighScore.appendChild(li);
    }

}

// 1. Click PLay again button
buttonPlayAgain.addEventListener('click', function(event){
    window.location.reload();

})

// 2. Click on Clear Button
buttonClearHighscore.addEventListener('click', function(event){

// Clears the local storage
localStorage.setItem('highscores', '[]');

// clears the dom
listHighScore.textContent = ""

})
