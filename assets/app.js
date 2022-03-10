const buttonStart = document.getElementById("button-start");
const sectionQuestions = document.getElementById("section-questions");
const sectionLanding = document.getElementById("section-landing");
const sectionTimer = document.getElementById("section-timer");
const sectioninitials = document.getElementById("section-initials");
const spanTime = document.getElementById("span-time");
const questionTitle = document.getElementById("question.title");
const spanFinalHighScore = document.getElementById("span-final-highscore"); 
const questionChoices = document.getElementById("question-choices");

let timerId = null;
let timeRemaining = 2;
let currentQuestionIndex = 0;
spanTime.textContent = timeRemaining;


// When user click on start button
buttonStart.addEventListener('click', function(event){
    
// show questions section
sectionQuestions.classList.remove('hide')

// hide landing page 
sectionLanding.classList.add('hide');

// TIMER
// update the span time for everysecond
function startTimer() {
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
    console.log(question.title);

    // loop through choices

    // generate li for each choice

    questionChoices.textContent = "";

    for (let index = 0; index < question.choices.length; index++) {
        const choice = question.choices[index];
        
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = choice.title;

        li.appendChild(button);

        questionChoices.appendChild(li);

    }
}

// Start timer
startTimer();

showQuestion()
})

// When Click on choice

// Should move onto next question

// What if user clicks on correct choice
// gives feed back its correct choice


// What if user clicks on Wrong choice
// gives feed back its wrong choice
// redcue the time ny 10 seconds

// When the user clicks on the  questions the end Game screen comes up

// What if user timer expires
// End the game 

function endGame(){
// 1. Timer should stop
clearInterval(timerId)


// End Game Screen
// 1. Timer should stop
// 2. Show end game screen
sectioninitials.classList.remove('hide')

// hide Questions setcion 
sectionQuestions.classList.add('hide')
}
// 3.Show high Scores in the end game screen

spanFinalHighScore.textContent = timeRemaining;
// High score  - highest time remaining 




// END GAME SCREEN
// 1. User can type in the input box

// 2. User can click the enter button on input box

// 3. User can click on submit
// Submit
// Submitting ----- Adds the User initials and high Csore to local storage

// After Submitting, redirect the user tot eh high score page


// HIGH SCORE SCREEN

// 1. Click PLay again button
// redirect the user tot eh landing page 

// 2. Click on Clear Button
// Clears the local storage
// clears the dom

